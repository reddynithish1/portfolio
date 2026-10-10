import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "../data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-[#07070A]/85 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="site-container h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-amber font-heading text-2xl tracking-wider hover:opacity-90 transition-opacity outline-none"
        >
          NR
        </Link>

        {/* Desktop Links: 32px gaps (gap-8), no number prefixes, no box around active link */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-[15px] font-medium transition-colors duration-200 outline-none ${
                  active ? "text-amber" : "text-[#B8B8C0] hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber rounded-full shadow-[0_0_10px_rgba(255,138,31,0.7)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-text-muted hover:text-amber outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2 text-amber" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2 text-amber" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Animated Dropdown Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-white/[0.06] bg-[#07070A]/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="site-container py-5 flex flex-col gap-2">
              {nav.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-colors outline-none ${
                      active
                        ? "text-amber bg-amber/10 border border-amber/20"
                        : "text-[#B8B8C0] hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
