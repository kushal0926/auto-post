import { Link } from "react-router-dom";
import { ArrowRightIcon, DotIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[56px_56px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cream border border-cream text-charcol text-xl px-3.5 py-1.5 rounded-full mb-8 ">
          AI-Powered Social Media Automation
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium">
          Post smarter.
          <br />
          <span>
            <mark>Grow faster.</mark>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-7 font-medium text-gray-700 max-w-2xl mx-auto">
          AutoPost lets you create, schedule, and auto-engage across all your
          social platforms — powered by AI that writes your captions and replies
          for you.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/login"
            className="bg-charcol text-cream border-[1.5px] border-black/10 rounded font-medium hover:bg-black/5 hover:border-black/20 hover:text-charcol inline-flex items-center gap-2 text-[15px] px-8 py-3.5 w-full sm:w-auto justify-center transition-all"
          >
            Start for free <ArrowRightIcon className="size-4" />
          </Link>
          <a
            href="#how-it-works"
            className="bg-transparent text-charcol border-[1.5px] border-black/10 rounded font-medium hover:bg-black/5 hover:border-black/20 inline-flex items-center gap-2 text-[15px] px-8 py-3.5 w-full sm:w-auto backdrop-blur justify-center transition-all"
          >
            See how it works
          </a>
        </div>

        <p className="mt-5 text-xl text-gray-700">
          No credit card required · Free forever plan available
        </p>
      </div>

      {/* Dashboard mockup */}
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pb-0">
        <div className="rounded overflow-hidden border border-gray-200 border-b-0">
          {/* Browser chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              background: "#1c1917",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <div className="flex-1 mx-4 rounded-md h-5 max-w-xs bg-white/80" />
          </div>

          {/* Mock content */}
          <div className="p-6" style={{ background: "#1c1917" }}>
            {/* Stat row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {[
                { val: "12", label: "Scheduled" },
                { val: "48", label: "Published" },
                { val: "4", label: "Accounts" },
                { val: "3", label: "AI Rules" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded p-4 bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="text-2xl font-bold text-charcol tabular-nums">
                    {s.val}
                  </div>
                  <div className="text-xs text-gray-700 mt-1 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Activity list */}
            <div
              className="rounded p-4 space-y-3 bg-white"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="text-[10px] font-semibold text-gray-700 uppercase tracking-widest mb-3">
                Recent Activity
              </div>
              {[
                {
                  text: "Post published to LinkedIn & Twitter",
                  time: "2m ago",
                },
                { text: "AI replied to 3 comments", time: "15m ago" },
                { text: "New post scheduled for tomorrow 9am", time: "1h ago" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <DotIcon className="size-5 text-charcol" />
                  <span className="text-sm text-charcol flex-1">
                    {item.text}
                  </span>
                  <span className="text-xs text-gray-700 shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
