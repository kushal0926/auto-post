import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function Navbar() {
  const { user } = { user: false };

  return (
    <nav className="sticky top-0 z-50 p-2 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 "
        >
          <img src="/favicon.svg" alt="logo" className="size-10" />
          <span className="text-xl lg:text-3xl font-bold leading-loose">
            AUTOPOST
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-xl font-medium">
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
            className="flex items-center gap-1.5 text-sm font-medium bg-charcol text-cream px-4 py-3 rounded bg hover:text-gray-400"
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
              className="flex items-center gap-1.5 text-sm bg-charcol hover:text-gray-400 text-cream px-4 py-3 rounded"
            >
              Get Started <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
