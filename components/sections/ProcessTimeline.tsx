interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a free call to understand your business goals, target audience, and project requirements.",
    duration: "1 week",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create wireframes and high-fidelity designs, iterating based on your feedback until it's perfect.",
    duration: "1-2 weeks",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop your project using modern technologies, with regular check-ins to keep you in the loop.",
    duration: "2-4 weeks",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle deployment, testing, and optimization to ensure a smooth launch and great performance.",
    duration: "1 week",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We provide ongoing support, updates, and improvements to keep your project running smoothly.",
    duration: "Ongoing",
  },
];

export function ProcessTimeline({
  title = "How we work",
  subtitle = "A clear, proven process that keeps projects on track and on budget.",
  steps = defaultSteps,
}: ProcessTimelineProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`lg:flex lg:items-center lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <div
                    className={`bg-background p-6 rounded-lg border ${
                      index % 2 === 0 ? "lg:ml-auto" : ""
                    } max-w-md`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl font-bold text-primary/20">
                        {step.number}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center w-4 h-4 bg-primary rounded-full ring-4 ring-background shrink-0" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

