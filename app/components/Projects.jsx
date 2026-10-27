"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import ScrollReveal from "./ScrollReveal";

const PROJECTS_DATA = [
  {
    id: "college-admission-form",
    number: "01",
    title: "College Admission Form",
    category: "Frontend Application",
    shortTag: "React • State Handling",
    description:
      "A responsive, full-featured college admission management form with extensive multi-step field validation, state synchronization, and clean accessible ergonomics.",
    longDescription:
      "Engineered to streamline student admissions through an intuitive, accessible interface. Features dynamic form state management, real-time input sanitization, step-by-step progress persistence, error boundaries, and zero-layout-shift responsive design across mobile and desktop viewports.",
    image: "/collegeForm.PNG",
    liveUrl: "https://college-form-handling.vercel.app/",
    githubUrl: "https://github.com/maheen02-coder/College-Form-handling",
    inDevelopment: false,
    tags: ["React.js", "JavaScript", "Form Handling", "Validation", "CSS3", "Vercel"],
    highlights: [
      "Dynamic field validation preventing incomplete submissions",
      "Modular step navigation with visual completion cues",
      "Accessible keyboard navigation and focus management",
      "Deployed on Vercel with automated continuous updates",
    ],
  },
  {
    id: "burger-builder",
    number: "02",
    title: "Burger Builder",
    category: "Interactive Web App",
    shortTag: "React • Dynamic UI",
    description:
      "An interactive burger builder web application that lets users customize their sandwich in real-time with visual ingredient stacking and live price calculation.",
    longDescription:
      "An engaging interactive web application demonstrating complex state synchronization. Users can add or remove ingredients (lettuce, bacon, cheese, meat) with instant visual feedback, reactive price recalculations, order summary generation, and responsive touch controls for mobile devices.",
    image: "/burger.PNG",
    liveUrl: "https://burger-builder-jet.vercel.app/",
    githubUrl: "https://github.com/maheen02-coder/Burger-Builder",
    inDevelopment: false,
    tags: ["React.js", "JavaScript", "State Management", "Dynamic Pricing", "CSS Modules"],
    highlights: [
      "Real-time visual stacking of ingredients with smooth transition cues",
      "Dynamic pricing engine calculating total cost on every interaction",
      "Order modal review with detailed breakdown and checkout simulation",
      "Clean component-driven hierarchy and modular styling",
    ],
  },
  {
    id: "digital-impacts",
    number: "03",
    title: "Digital Impacts",
    category: "Digital Agency Platform",
    shortTag: "Next.js • Responsive UX",
    description:
      "A modern, responsive digital agency web platform crafted with sleek typography, service showcase modules, and clean visual storytelling.",
    longDescription:
      "A digital agency platform built to showcase services, portfolio work, and client impact. Focused on modern responsive layouts, thoughtful visual hierarchy, tactile interactions, and engaging content structure that drives conversions.",
    image: "/digital-impacts.PNG",
    liveUrl: "https://digital-impact-snowy.vercel.app/",
    githubUrl: "https://github.com/maheen02-coder",
    inDevelopment: false,
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Modern UX"],
    highlights: [
      "Digital agency services and impact information architecture",
      "Responsive card layouts optimized for all viewport widths",
      "Tailwind-powered glassmorphism and refined color accents",
      "Touch-friendly navigation and engaging service showcase modules",
    ],
  },
  {
    id: "shopsphere",
    number: "04",
    title: "ShopSphere",
    category: "Full-Stack E-Commerce",
    shortTag: "Full-Stack • Node • MongoDB",
    description:
      "A full-stack modern e-commerce web platform in active development, featuring product catalog browsing, cart flows, secure auth, and MongoDB persistence.",
    longDescription:
      "An ambitious full-stack e-commerce solution architected with Next.js, Node.js, Express, and MongoDB. Includes a modern luxury dark storefront aesthetic, product filtering, persistent shopping cart state, JWT authentication, and RESTful API endpoints for catalog and orders.",
    image: "/shopsphere.jpg",
    liveUrl: "https://shop-sphere-nine-nu.vercel.app/",
    githubUrl: "https://github.com/maheen02-coder",
    inDevelopment: false,
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Full-stack architecture with decoupled backend API endpoints",
      "MongoDB document schemas for products, users, and orders",
      "Persistent cart state and streamlined checkout flow",
      "High-end luxury dark mode user interface with cyan and silver accents",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS_DATA
      : filter === "frontend"
      ? PROJECTS_DATA.filter((p) => p.category.includes("Frontend") || p.category.includes("Interactive"))
      : PROJECTS_DATA.filter((p) => p.category.includes("Full-Stack") || p.category.includes("Platform"));

  return (
    <section
      id="projects"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Animated Hairline Section Divider */}
        <div className="luxury-divider w-full" />

        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={50} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-sky-400 font-mono">
              <span className="font-bold">// 03</span>
              <span className="w-8 h-px bg-sky-400/50" />
              <span>Selected Portfolio Works</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Featured projects &amp;{" "}
              <span className="text-gradient-silver">interactive products.</span>
            </h2>
          </div>

          {/* Filter Pills (Flexbox) */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md w-fit">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-white text-black shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All (04)
            </button>
            <button
              type="button"
              onClick={() => setFilter("frontend")}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                filter === "frontend"
                  ? "bg-white text-black shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Frontend
            </button>
            <button
              type="button"
              onClick={() => setFilter("fullstack")}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                filter === "fullstack"
                  ? "bg-white text-black shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Full-Stack
            </button>
          </div>
        </ScrollReveal>

        {/* Project Showcase List (Pure Flexbox Layout with flex-col / flex-row) */}
        <div className="flex flex-col gap-14 sm:gap-20">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <ScrollReveal
                key={project.id}
                variant="fade-up"
                delay={100}
                className="w-full"
              >
                <div className="luxury-card p-6 sm:p-8 lg:p-10 rounded-3xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group transition-all duration-500 hover:border-white/20">
                  {/* Visual Showcase Column with Mask & Hover Zoom */}
                  <div
                    className={`relative w-full lg:w-7/12 h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-black/60 group-hover:border-sky-400/40 transition-all duration-500 cursor-pointer ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030407]/90 via-transparent to-black/20 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-xs font-mono font-bold tracking-widest text-white/90 px-3 py-1 rounded-lg bg-black/60 border border-white/15 backdrop-blur-md">
                        {project.number}
                      </span>

                      {project.inDevelopment ? (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-200 backdrop-blur-md">
                          In Active Development
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-200 backdrop-blur-md">
                          Production Live
                        </span>
                      )}
                    </div>

                    {/* Hover Inspect Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <div className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span>Inspect Architecture</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Details Column (Pure Flexbox) */}
                  <div
                    className={`flex flex-col justify-between gap-6 w-full lg:w-5/12 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400">
                        {project.category}
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-sky-200 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills (Flexbox) */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons (Flexbox) */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                        >
                          <span>Live Demo</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>GitHub Code</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-mono text-slate-400 hover:text-sky-300 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Case Study</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      

    </section>
     );
}
