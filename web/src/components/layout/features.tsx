import {
  CalendarDaysIcon,
  Wand2Icon,
  Share2Icon,
  ZapIcon,
  BarChart3Icon,
  HashIcon,
} from "lucide-react";

const features = [
  {
    icon: CalendarDaysIcon,
    title: "Smart Scheduling",
    description:
      "Queue posts across all platforms with a single click. Set it once and let us handle the rest.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: Wand2Icon,
    title: "AI Content Generator",
    description:
      "Generate on-brand captions and stunning images with our built-in AI. Never stare at a blank page again.",
    color: "bg-red-50 text-red-500",
  },

  {
    icon: BarChart3Icon,
    title: "Activity Dashboard",
    description:
      "Get a bird's eye view of all published posts, scheduled content, and engagement activity in one place.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: Share2Icon,
    title: "Multi-Platform",
    description:
      "Connect Twitter, LinkedIn, Facebook, and Instagram. Post everywhere from one unified workspace.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: ZapIcon,
    title: "Instant Publishing",
    description:
      "Need to go live now? Publish immediately or schedule for peak engagement times with full timezone support.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: HashIcon,
    title: "Hashtag Suggestions",
    description:
      "Get AI-powered hashtag suggestions to reach a wider audience.",
    color: "bg-red-50 text-red-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-1.5  text-charcol text-xl font-medium tracking-[0.06em] uppercase px-3.5 py-1.5 rounded-full">
            <ZapIcon className="size-5" />
            Everything you need
          </div>
          <h2 className=" text-4xl sm:text-5xl font-medium leading-tight text-gray-900">
            Automate your entire
            <br />
            <span>
              <mark>social media workflow</mark>
            </span>
          </h2>
          <p className="mt-5 font-medium text-gray-700 max-w-xl mx-auto leading-relaxed">
            From content creation to scheduling — Scheduler handles it all so
            you can focus on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-cream rounded border border-charcol/10 p-6 hover:border-slate-200 hover:shadow-md hover:shadow-slate-100 group"
            >
              <div className={`size-10 flex items-center justify-center mb-4 `}>
                <f.icon className="size-5" />
              </div>
              <h3 className=" text-charcol mb-2 font-medium">{f.title}</h3>
              <p className="text-sm text-slate-500/90 font-medium leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
