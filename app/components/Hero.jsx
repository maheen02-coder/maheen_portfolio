"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderStaggeredWord = (word, startDelay, customClass = "") => {
    return (
      <span className="letter-reveal-container inline-flex">
        {word.split("").map((char, index) => (
          <span
            key={index}
            className={`letter-reveal-char ${customClass}`}
            style={{
              animationDelay: `${startDelay + index * 45}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-12 pt-28 pb-16 select-none"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        >
          <source src="/codeimg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030407] via-[#030407]/60 to-transparent pointer-events-none" />
      </div>

      <div
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center transition-transform duration-300 ease-out px-4 py-8 rounded-3xl"
        style={{
          transform: `translate(calc(var(--mouse-x, 0) * -12px), calc(var(--mouse-y, 0) * -12px))`,
          background:
            "radial-gradient(ellipse at center, rgba(3, 4, 7, 0.55) 0%, rgba(3, 4, 7, 0.2) 65%, transparent 100%)",
        }}
      >
        <div
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          </span>

          <span className="text-[11px] uppercase tracking-[0.25em] text-slate-300 font-mono">
            Full-Stack Web Developer
          </span>

          <span className="text-slate-600 hidden sm:inline">•</span>

          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
            React • Next.js • Node.js
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[1.05] mb-6 flex flex-col items-center">
          <span className="text-gradient-glow hover:text-white transition-colors">
            {renderStaggeredWord("Think.", 150)}
          </span>

          <span className="text-white hover:text-slate-200 transition-colors">
            {renderStaggeredWord("Build.", 450)}
          </span>

          <span className="text-gradient-cyan text-metallic-sweep">
            {renderStaggeredWord("Deploy.", 750)}
          </span>
        </h1>

        <p
          className={`text-lg sm:text-2xl md:text-3xl font-light text-slate-200 tracking-wide mb-6 max-w-3xl transition-all duration-800 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Crafting digital experiences with purpose.
        </p>

        <p
          className={`text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10 font-normal transition-all duration-800 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Hello, I&apos;m{" "}
          <span className="text-white font-semibold">Maheen Abrar</span>. I
          architect and engineer responsive, high-performance web applications
          using clean modern code, intuitive human-centered design, and scalable
          full-stack technologies.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16 transition-all duration-800 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            type="button"
            onClick={() => handleScrollTo("projects")}
            className="btn-magnetic group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-white via-slate-100 to-sky-100 text-black font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_35px_rgba(56,189,248,0.25)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
          >
            <span className="relative z-10 font-bold">Explore My Work</span>

            <svg
              className="relative z-10 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-200 via-white to-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo("contact")}
            className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/15 hover:border-sky-400/50 font-medium text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Let&apos;s Connect</span>

            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-sky-300 group-hover:rotate-12 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2H5a2 2 0 00-2-2V7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full max-w-4xl pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] uppercase tracking-[0.22em] text-slate-400 font-mono transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
            <span>04 Featured Projects</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>End-to-End Full-Stack</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
            <span>Architectural Integrity</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>Fluid Responsive UX</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-sky-300 transition-colors font-mono">
          Explore
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 group-hover:border-sky-400/60 flex justify-center p-1 transition-colors">
          <div className="w-1 h-2 rounded-full bg-sky-400 animate-float" />
        </div>
      </button>
    </section>
  );
}