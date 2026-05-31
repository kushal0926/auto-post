import { Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Features", "How it works", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer
      style={{ background: "#f9f6f0", borderTop: "1px solid rgba(0,0,0,0.07)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              onClick={() => {
                scrollTo(0, 0);
              }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <img src="/favicon.svg" alt="logo" className="size-6" />
              <span className="font-medium text-xl text-charcol uppercase">
                autopost
              </span>
            </Link>
            <p className="text-sm font-medium text-gray-700 leading-relaxed max-w-xs">
              The AI-powered social media scheduler that helps creators and
              teams grow faster with less effort.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-xs font-semibold uppercase tracking-widest mb-5 text-charcol">
                {category}
              </div>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
        >
          <p className="text-sm text-gray-700 flex items-center ">
            <Copyright className="w-3 h-3" /> 2026 AutoPost. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-700 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-700 font-medium"
            >
              Terms of Service
            </a>
            <Link
              to="/login"
              className="text-xs text-gray-500 hover:text-gray-700 font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
