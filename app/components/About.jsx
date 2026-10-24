"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  const PILLARS = [
    {
      number: "01",
      title: "Frontend Craftsmanship",
      focus: "Next.js • React • Tailwind CSS",
      description:
        "Building fluid, accessible, and intuitive user interfaces with state-of-the-art component architecture, micro-interactions, and responsive typography.",
      icon: (
        <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Backend & RESTful APIs",
      focus: "Node.js • Express • Authentication",
      description:
        "Designing robust server-side controllers, secure token-based authentication (JWT), structured middleware pipelines, and performant REST API endpoints.",
      icon: (
        <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Databases & Data Modeling",
      focus: "MongoDB • SQL • Schema Design",
      description:
        "Structuring scalable document schemas in MongoDB and relational SQL tables with emphasis on data normalization, query speed, and data integrity.",
      icon: (
        <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Deployment & Optimization",
      focus: "Vercel • Git • Lighthouse",
      description:
        "Optimizing Core Web Vitals, asset bundling, automated deployments on Vercel, and maintaining organized version control practices on GitHub.",
      icon: (
        <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Animated Hairline Section Divider */}
        <div className="luxury-divider w-full" />

        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={50} className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-sky-400 font-mono">
            <span className="font-bold">// 01</span>
            <span className="w-8 h-px bg-sky-400/50" />
            <span>Profile &amp; Engineering Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
            Bridging aesthetic precision with{" "}
            <span className="text-gradient-silver">resilient backend engineering.</span>
          </h2>
        </ScrollReveal>

        {/* Two-Column Editorial Layout (Pure Flexbox) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          {/* Narrative Column */}
          <div className="flex flex-col justify-between gap-8 lg:w-1/2">
            <ScrollReveal variant="fade-up" delay={150} className="flex flex-col gap-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              <p>
                I am <span className="text-white font-medium">Maheen Abrar</span>, a Full-Stack Web Developer driven by the craft of transforming ambitious concepts into seamless, elegant digital products.
              </p>

              <p>
                My engineering approach is holistic. On the frontend, I obsess over responsive ergonomics, typographic rhythm, and subtle micro-interactions that make digital interfaces feel alive. On the backend, I design reliable architectures, secure APIs, and streamlined database schemas that scale gracefully under pressure.
              </p>

              <p>
                I prioritize clean, maintainable code and scalable patterns over temporary shortcuts. Whether crafting dynamic client applications with React and Next.js or structuring robust server-side logic with Node.js and MongoDB, my focus is delivering software with real purpose.
              </p>
            </ScrollReveal>

            {/* Editorial Quote Card with Fine Light Border */}
            <ScrollReveal variant="fade-up" delay={250}>
              <div className="luxury-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-sky-400 via-sky-300 to-blue-600" />
                <p className="text-base sm:text-lg italic text-slate-200 leading-snug mb-4">
                  &ldquo;Great software is not just about what it does under the hood—it is about how effortlessly it empowers people to think, create, and achieve.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-px bg-slate-500" />
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                    Maheen Abrar — Engineering Philosophy
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Metrics Ribbon (Flexbox) */}
            <ScrollReveal variant="fade-up" delay={350} className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  Full-Stack
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400">
                  Engineering Scope
                </span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  English · Urdu
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400">
                  Languages
                </span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-sky-400 font-mono">
                  100%
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400">
                  Code Commitment
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Pillars Column (Pure Flexbox Cards) */}
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">
              Core Engineering Pillars
            </h3>

            {PILLARS.map((pillar, idx) => (
              <ScrollReveal
                key={pillar.number}
                variant="fade-up"
                delay={150 + idx * 80}
              >
                <div className="luxury-card p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 group">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-sky-400/50 group-hover:bg-sky-500/10 shrink-0 transition-all duration-300">
                    {pillar.icon}
                  </div>

                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-sky-400 transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-sky-400/90 tracking-wide">
                      {pillar.focus}
                    </p>

                    <p className="text-sm text-slate-400 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
