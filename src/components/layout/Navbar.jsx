import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none flex justify-center pt-4 transition-all duration-300 md:pt-6">
      <div
        className={`w-full max-w-7xl mx-4 rounded-full transition-all duration-500 pointer-events-auto flex justify-center ${
          scrolled
            ? "bg-white/85 border border-line backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.04)] md:max-w-5xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        <Container className="w-full">
          <nav
            className="flex h-16 items-center justify-between"
            aria-label="Primary"
          >
            {/* Logo Identity utilizing theme animations */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Ryan Technology India — Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-surface transition-transform duration-500 ease-out group-hover:scale-105">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="overflow-visible"
                >
                  <path
                    d="M4 12h4l2-6 4 12 2-6h4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-trace"
                    style={{ strokeDasharray: "240" }}
                  />
                </svg>
              </span>
              <span className="font-display font-bold text-base tracking-tight text-navy leading-none flex flex-col">
                Ryan Technology
                <span className="mono-tag text-[9px] font-normal uppercase tracking-[0.15em] text-navy/40 mt-1">
                  INDIA
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Link Track with Magnetic Hover Capsule */}
            <ul
              className="hidden lg:flex items-center gap-1.5"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {NAV_LINKS.map((link) => {
                const isHovered = hoveredLink === link.to;
                return (
                  <li key={link.to} className="relative">
                    <NavLink
                      to={link.to}
                      onMouseEnter={() => setHoveredLink(link.to)}
                      className={({ isActive }) =>
                        `relative z-10 block px-4 py-2 rounded-full text-[13px] font-medium tracking-tight transition-colors duration-300 ${
                          isActive
                            ? "text-blue"
                            : "text-navy-soft/80 hover:text-navy"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <span className="relative block">
                          {link.label}
                          {isActive && (
                            <motion.span
                              layoutId="activeIndicator"
                              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue rounded-full"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            />
                          )}
                        </span>
                      )}
                    </NavLink>

                    {/* Morphing pill background accent */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          layoutId="hoverCapsule"
                          className="absolute inset-0 bg-navy/[0.04] rounded-full -z-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 32,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* Call To Action Container */}
            <div className="hidden lg:block">
              <Button
                to="/contact"
                variant="primary"
                className="rounded-full text-xs font-semibold tracking-tight px-5 py-2.5 shadow-sm"
              >
                Request Quote
              </Button>
            </div>

            {/* Mobile Actions Switcher */}
            <button
              type="button"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy bg-white/50 backdrop-blur-sm shadow-sm transition-transform active:scale-95 cursor-pointer"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </nav>
        </Container>
      </div>

      {/* Premium Dropdown Mobile Panel Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-4 right-4 lg:hidden pointer-events-auto overflow-hidden bg-white border border-line rounded-3xl shadow-xl z-40"
          >
            <Container className="py-8 px-6 flex flex-col gap-2">
              <span className="mono-tag text-[10px] text-navy/30 tracking-[0.2em] mb-2 px-3 block">
                NAVIGATION
              </span>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium tracking-tight transition-all ${
                      isActive
                        ? "text-blue bg-blue/5 font-semibold"
                        : "text-navy-soft hover:bg-navy/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-2 border-t border-line">
                <Button
                  to="/contact"
                  variant="primary"
                  className="w-full justify-center rounded-xl py-3.5 text-sm font-medium"
                >
                  Request Quote
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
