import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative rounded overflow-hidden p-14 sm:p-20 text-center border border-black/10">
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-1.5 text-charcol text-xl font-medium tracking-[0.06em] uppercase underline">
              Ready to grow?
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-medium text-gray-900">
              Automate your social
              <br />
              <span>
                <mark>media today</mark>
              </span>
            </h2>
            <p className="mt-6 text-gray-700 max-w-lg mx-auto text-lg font-medium">
              Join thousands of creators and marketers who trust Scheduler to
              grow their audience on autopilot.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/login"
                className="bg-charcol text-cream hover:text-gray-400 rounded font-semibold inline-flex items-center gap-2 text-[15px] px-10 py-4 w-full sm:w-auto justify-center"
              >
                Get Started Free <ArrowRightIcon className="size-4" />
              </Link>
              <a
                href="#pricing"
                className="bg-transparent text-[#333] border-[1.5px] border-black/10 rounded font-medium hover:bg-black/5 hover:border-black/20 inline-flex items-center gap-2 text-[15px] px-10 py-4 w-full sm:w-auto justify-center"
              >
                View Pricing
              </a>
            </div>

            <p className="mt-6 text-xl text-gray-700 font-medium">
              No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
