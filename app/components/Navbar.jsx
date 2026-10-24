"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home", num: "00" },
  { id: "about", label: "About", num: "01" },
  { id: "skills", label: "Skills", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 280;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP FIXED VERTICAL LEFT-SIDE NAVIGATION (lg and up)  */}
      {/* ========================================================= */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 xl:w-72 z-40 luxury-sidebar flex-col justify-between p-6 xl:p-8 select-none"
        aria-label="Main Navigation"
      >
        {/* Brand Header */}
        <div className="flex flex-col gap-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center gap-3.5 cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 group-hover:border-sky-400/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <span className="font-mono text-sm font-black tracking-widest text-white group-hover:text-sky-300 transition-colors">
                MA
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping opacity-60" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-[0.22em] text-white uppercase group-hover:text-sky-200 transition-colors">
                MAHEEN ABRAR
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-mono">
                Full-Stack Studio
              </span>
            </div>
          </a>

          <div className="w-full h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent mt-2" />
        </div>

        {/* Center Vertical Nav Items */}
        <nav className="relative flex flex-col gap-2 my-auto py-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white bg-white/[0.07] border border-sky-400/30 active-pill-glow"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.03] border border-transparent hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-[11px] transition-colors ${
                      isActive
                        ? "text-sky-400 font-bold"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                    {item.label}
                  </span>
                </div>

                {/* Animated Right Active Pill */}
                <div className="flex items-center">
                  <span
                    className={`h-4 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-1.5 bg-sky-400 shadow-[0_0_12px_#38bdf8]"
                        : "w-0 bg-transparent group-hover:w-1 group-hover:bg-white/40"
                    }`}
                  />
                </div>

                {/* Subtle Cyan Light Trail on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/0 via-sky-500/[0.04] to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </a>
            );
          })}
        </nav>

        {/* Bottom Sidebar Footer */}
        <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
          {/* Availability Status */}
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
              Open to Opportunities
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <a
              href="https://github.com/maheen02-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <span className="text-[10px]">↗</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="mailto:maheensidhu2@gmail.com"
              className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
            >
              <span>Email</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* MOBILE / TABLET FIXED TOP BAR (< lg)                     */}
      {/* ========================================================= */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? "luxury-topbar" : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 border border-white/15">
            <span className="font-mono text-xs font-bold text-white">MA</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] text-white uppercase font-mono">
            MAHEEN ABRAR
          </span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-4 h-0.5 bg-white rounded-full transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-white rounded-full my-1 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-white rounded-full transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 z-40 transition-all duration-400 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-3 p-5 rounded-2xl bg-[#06080e]/98 border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all ${
                  isActive
                    ? "text-sky-300 bg-sky-500/10 border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-sky-400/80">
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                )}
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="https://github.com/maheen02-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs uppercase tracking-wider font-mono text-slate-200 bg-white/[0.04] border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span>GitHub (maheen02-coder)</span>
              <span>↗</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-white via-slate-100 to-sky-200 shadow-lg"
            >
              <span>Let&apos;s Connect</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
