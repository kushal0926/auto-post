import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Connect Your Accounts",
    description:
      "Link your social profiles in seconds. We support Twitter, LinkedIn, Facebook, and Instagram.",
  },
  {
    step: "02",
    title: "Create or Generate Content",
    description:
      "Write your own post or let our AI craft a caption and image based on your prompt.",
  },
  {
    step: "03",
    title: "Schedule & Publish",
    description:
      "Pick a time, select your platforms, and hit schedule. We handle publishing automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center underline gap-1.5 text-charcol text-xl font-medium tracking-[0.06em] uppercase ">
            <mark className="flex items-center gap-2">
              <CheckCircleIcon className="size-5" />
              Simple setup
            </mark>
          </div>
          <h2 className="font-medium text-4xl sm:text-5xl leading-tight text-gray-900">
            Up and running in{" "}
            <span>
              <mark>minutes</mark>
            </span>
          </h2>
          <p className="mt-5 text-gray-700 max-w-lg mx-auto leading-relaxed font-medium">
            No complicated onboarding, no steep learning curve. Just connect,
            create, and grow.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-6 items-start ">
              <div className="shrink-0 size-12  flex items-center justify-center">
                <span className="text-xl font-medium text-charcol">
                  {s.step}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="text-charcol mb-1 font-medium">{s.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  {s.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block ml-auto shrink-0 self-center">
                  <ArrowRightIcon className="size-4 text-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
