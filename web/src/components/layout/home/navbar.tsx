import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { user } = { user: false };

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 p-2 bg-cream"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 "
        >
          <img src="/favicon.svg" alt="logo" className=" size-6 md:size-10" />
          <span className="text-xl lg:text-3xl font-bold leading-loose">
            AUTOPOST
          </span>
        </Link>
        <div className="hidden md:text-sm md:flex items-center gap-8 text-xl font-medium">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#how-it-works" className="hover:underline">
            How it works
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
        </div>

        {user ? (
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 text-sm font-medium bg-charcol text-cream  rounded bg hover:bg-black/5 hover:border-black/20 hover:text-charcol border p-2 md:px-4 md:py-3 "
          >
            Go to Dashboard <ArrowRightIcon className="size-4" />
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-xl hover:underline hidden sm:block"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="bg-charcol text-cream border-[1.5px] border-black/10 rounded font-medium hover:bg-black/5 hover:border-black/20 hover:text-charcol inline-flex items-center gap-2 text-[15px] px-3 py-3 w-full sm:w-auto justify-center transition-all"
            >
              Get Started <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        )}
      </nav>
    </motion.div>
  );
}
