import { CheckIcon, CircleCheckBigIcon } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description:
      "Perfect for creators just getting started with social media automation.",
    features: [
      "2 social accounts",
      "10 scheduled posts/month",
      "AI content (5 credits/mo)",
      "Basic dashboard",
    ],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description:
      "Everything you need to grow and automate your social presence.",
    features: [
      "Unlimited accounts",
      "Unlimited scheduling",
      "AI content (200 credits/mo)",
      "Priority support",
    ],
    cta: "Start 14-day Free Trial",
    highlight: true,
  },
  {
    name: "Agency",
    price: "$79",
    period: "/month",
    description: "For teams and agencies managing multiple brands at scale.",
    features: [
      "Everything in Pro",
      "5 team members",
      "Unlimited AI credits",
      "Custom AI personas",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-1.5 text-charcol text-xl font-medium tracking-[0.06em] uppercase">
            <CircleCheckBigIcon className="size-5" />
            Simple pricing
          </div>
          <h2 className="font-medium text-4xl sm:text-5xl leading-tight text-gray-900">
            Plans for every stage
            <br />
            <span>
              <mark>of growth</mark>
            </span>
          </h2>
          <p className="mt-5 text-gray-700 max-w-md mx-auto font-medium">
            Start free, upgrade when you're ready. Cancel anytime — no hidden
            fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded border p-7 flex flex-col gap-6 relative ${plan.highlight ? "bg-charcol text-cream" : "bg-white text-slate-900 border-slate-200"}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cream text-charcol text-xl font-medium px-3.5 py-1.5 rounded border border-black/10">
                  Most Popular
                </div>
              )}
              <div>
                <div
                  className={`text-xl font-semibold mb-1 ${plan.highlight ? "text-cream" : "text-charcol"}`}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`text-xl mb-1.5 ${plan.highlight ? "text-cream" : "text-gray-700"}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 leading-relaxed ${plan.highlight ? "text-red-100" : "text-gray-700"}`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm font-medium"
                  >
                    <div
                      className={`size-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? "bg-charcol" : "bg-charcol"}`}
                    >
                      <CheckIcon
                        className={`w-3 h-3 ${plan.highlight ? "text-cream" : "text-cream"}`}
                      />
                    </div>
                    <span
                      className={
                        plan.highlight ? "text-red-50" : "text-slate-600"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/#"
                className={`mt-auto text-center font-semibold text-sm px-6 py-3 rounded ${plan.highlight ? "bg-cream text-charcol hover:bg-" : "bg-charcol text-cream hover:text-gray-400"}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
