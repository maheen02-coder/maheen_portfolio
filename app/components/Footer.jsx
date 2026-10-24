"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full border-t border-white/[0.08] bg-[#020306] py-14 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top Flexbox Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 text-white font-mono text-xs font-bold">
              MA
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-[0.2em] uppercase text-white">
                Maheen Abrar
              </span>
              <span className="text-[10px] tracking-[0.2em] font-mono text-slate-400 uppercase">
                Full-Stack Creative Developer
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (Flexbox) */}
          <nav className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-mono text-slate-400">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-slate-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Bottom Flexbox Bar: Copyright & Channels */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Maheen Abrar. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/maheen02-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub (maheen02-coder)
            </a>
            <span>•</span>
            <a
              href="mailto:maheensidhu2@gmail.com"
              className="hover:text-slate-300 transition-colors"
            >
              maheensidhu2@gmail.com
            </a>
          </div>

          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            Think • Build • Deploy
          </p>
        </div>
      </div>
    </footer>
  );
}
