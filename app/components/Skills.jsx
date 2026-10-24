"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const SKILLS_DATA = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    categoryName: "Frontend",
    role: "Core UI Architecture",
    tag: "Server Components & Hooks",
    architecture: "State synchronization, reactive UI trees, synthetic events",
  },
  {
    name: "Next.js",
    category: "frontend",
    categoryName: "Frontend",
    role: "Production Framework",
    tag: "App Router & SSR",
    architecture: "Edge routing, hybrid rendering, static pre-generation",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    categoryName: "Frontend",
    role: "Core Language",
    tag: "Modern ECMAScript",
    architecture: "Asynchronous runtime, closures, event loop, DOM manipulation",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    categoryName: "Frontend",
    role: "Design System & Tokens",
    tag: "Utility-First Styling",
    architecture: "Atomic CSS compilation, media query hierarchies, dark mode tokens",
  },
  {
    name: "HTML5 & Semantic Web",
    category: "frontend",
    categoryName: "Frontend",
    role: "Information Architecture",
    tag: "Semantic Markup",
    architecture: "ARIA accessibility guidelines, document outlining, SEO indexing",
  },
  {
    name: "CSS3 & Responsive Layout",
    category: "frontend",
    categoryName: "Frontend",
    role: "Styling & Motion",
    tag: "Flexbox & Keyframes",
    architecture: "Hardware-accelerated transforms, fluid typography, zero layout shifts",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    categoryName: "Frontend",
    role: "CSS Framework",
    tag: "Grid & Prototyping",
    architecture: "Responsive container models, responsive utilities, UI components",
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "backend",
    categoryName: "Backend & APIs",
    role: "Server Runtime",
    tag: "Event-Driven I/O",
    architecture: "Non-blocking execution, stream pipelines, module resolution",
  },
  {
    name: "Express.js",
    category: "backend",
    categoryName: "Backend & APIs",
    role: "API Framework",
    tag: "Middleware Pipeline",
    architecture: "RESTful route routing, error handling middleware, JSON payloads",
  },
  {
    name: "REST APIs",
    category: "backend",
    categoryName: "Backend & APIs",
    role: "System Interoperability",
    tag: "HTTP Architecture",
    architecture: "Stateless contracts, HTTP status semantics, payload sanitization",
  },
  {
    name: "Authentication & Security",
    category: "backend",
    categoryName: "Backend & APIs",
    role: "Access & Identity",
    tag: "JWT & Session Tokens",
    architecture: "Bcrypt password hashing, token verification, route guards",
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    categoryName: "Database & Cloud",
    role: "Document Database",
    tag: "Mongoose ODM",
    architecture: "Flexible BSON document schemas, indexing strategies, queries",
  },
  {
    name: "SQL",
    category: "database",
    categoryName: "Database & Cloud",
    role: "Relational Modeling",
    tag: "Relational Queries",
    architecture: "Schema normalization, table joins, transactional data integrity",
  },

  // DevOps & Tools
  {
    name: "Git",
    category: "tools",
    categoryName: "DevOps & Workflow",
    role: "Version Control",
    tag: "Source Tracking",
    architecture: "Atomic commit histories, branching workflows, conflict resolution",
  },
  {
    name: "GitHub",
    category: "tools",
    categoryName: "DevOps & Workflow",
    role: "Collaboration & Repos",
    tag: "CI/CD & Releases",
    architecture: "Pull request reviews, remote repository workflows, issue tracking",
  },
  {
    name: "Vercel",
    category: "tools",
    categoryName: "DevOps & Workflow",
    role: "Edge Deployment",
    tag: "Serverless Hosting",
    architecture: "Edge network delivery, automatic builds, zero-config domain routing",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & APIs" },
  { id: "database", label: "Database" },
  { id: "tools", label: "DevOps & Tools" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeFilter);

  return (
    <section
      id="skills"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Animated Hairline Section Divider */}
        <div className="luxury-divider w-full" />

        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={50} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-sky-400 font-mono">
              <span className="font-bold">// 02</span>
              <span className="w-8 h-px bg-sky-400/50" />
              <span>Technical Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Engineering stack &amp;{" "}
              <span className="text-gradient-cyan">applied toolset.</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Curated modern full-stack capabilities focused on maintainability, fast execution, and resilient architectural standards.
          </p>
        </ScrollReveal>

        {/* Filter Tabs (Flexbox) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md w-fit">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards (Pure Flexbox Layout with flex-wrap and Staggered Reveals) */}
        <div className="flex flex-wrap gap-4 sm:gap-5 justify-start">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="luxury-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between gap-4 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] group transition-all duration-400 relative overflow-hidden"
            >
              {/* Top Row: Role & Category */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/25">
                  {skill.role}
                </span>
                <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                  {skill.categoryName}
                </span>
              </div>

              {/* Title & Tag */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {skill.tag}
                </p>
              </div>

              {/* Architecture Scope & Capabilities */}
              <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                  Core Implementation
                </span>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {skill.architecture}
                </p>
              </div>

              {/* Corner Ambient Glow */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-sky-500/10 blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Philosophy & Architecture Ribbon */}
        <div className="luxury-card p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1.5">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Disciplined Architecture &amp; Clean Execution
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl">
              Strict adherence to responsive viewport dynamics, modular state flow, semantic document hierarchy, and zero layout shifts.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-slate-300">
            <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10">Semantic Web</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10">Modular Patterns</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10">Edge Optimized</span>
          </div>
        </div>
      </div>
    </section>
  );
}
