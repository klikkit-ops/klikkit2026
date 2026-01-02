import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to get label from value
function getLabelFromValue(
  value: string,
  options: { value: string; label: string }[]
): string {
  return options.find((opt) => opt.value === value)?.label || value;
}

const serviceLabels: { [key: string]: string } = {
  "web-design": "Web Design",
  "ios-app": "iOS App Development",
  "ai-automation": "AI & Automation",
  multiple: "Multiple Services",
  other: "Other / Not Sure",
};

const budgetLabels: { [key: string]: string } = {
  "under-2k": "Under £2,000",
  "2k-5k": "£2,000 - £5,000",
  "5k-10k": "£5,000 - £10,000",
  "10k-20k": "£10,000 - £20,000",
  "over-20k": "£20,000+",
  "not-sure": "Not sure yet",
};

const locationLabels: { [key: string]: string } = {
  "south-london": "South London",
  kent: "Kent",
  "other-uk": "Other UK Location",
  remote: "Remote / International",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, location, message } = body;

    // Validate required fields
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Build email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f0b913; color: #000; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { font-size: 16px; color: #000; }
            .message-box { background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #f0b913; margin-top: 10px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
              </div>
              ` : ""}
              
              <div class="field">
                <div class="label">Service Interest</div>
                <div class="value">${serviceLabels[service] || service}</div>
              </div>
              
              <div class="field">
                <div class="label">Budget Range</div>
                <div class="value">${budgetLabels[budget] || budget}</div>
              </div>
              
              ${location ? `
              <div class="field">
                <div class="label">Location</div>
                <div class="value">${locationLabels[location] || location}</div>
              </div>
              ` : ""}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the Klikkit contact form.</p>
                <p>You can reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
Service Interest: ${serviceLabels[service] || service}
Budget Range: ${budgetLabels[budget] || budget}
${location ? `Location: ${locationLabels[location] || location}` : ""}

Message:
${message}

---
This email was sent from the Klikkit contact form.
You can reply directly to this email to respond to ${name}.
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Klikkit Contact Form <contact@klikkit.co.uk>",
      to: ["contact@klikkit.co.uk"],
      replyTo: email,
      subject: `New Contact Form: ${name} - ${serviceLabels[service] || service}`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

