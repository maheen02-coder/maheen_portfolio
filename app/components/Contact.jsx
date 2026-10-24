"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const CONTACT_EMAIL = "maheensidhu2@gmail.com";

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please provide your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      errs.subject = "Please provide a brief subject.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please include a message with at least 10 characters.";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleCopyFormattedMessage = async () => {
    const textToCopy = `From: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\n${formData.message}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 3000);
    } catch {
      // Fallback
    }
  };

  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    formData.subject || "Portfolio Inquiry - Maheen Abrar"
  )}&body=${encodeURIComponent(
    `Hello Maheen,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
  )}`;

  return (
    <section
      id="contact"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-12 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Animated Hairline Section Divider */}
        <div className="luxury-divider w-full" />

        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={50} className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-sky-400 font-mono">
            <span className="font-bold">// 04</span>
            <span className="w-8 h-px bg-sky-400/50" />
            <span>Direct Inquiries &amp; Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Let&apos;s build{" "}
            <span className="text-gradient-cyan">something exceptional.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Whether you have an upcoming project, are seeking a Full-Stack Web Developer, or want to explore an innovative collaboration, my inbox is open.
          </p>
        </ScrollReveal>

        {/* Two Column Layout (Pure Flexbox) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          {/* Direct Contact Cards Column */}
          <div className="flex flex-col justify-between gap-8 lg:w-5/12">
            <ScrollReveal variant="fade-up" delay={150} className="flex flex-col gap-6">
              {/* Email Card */}
              <div className="luxury-card p-6 sm:p-8 rounded-3xl flex flex-col gap-4 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Direct Email
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                </div>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-sky-300 transition-colors break-all"
                >
                  {CONTACT_EMAIL}
                </a>

                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Fastest way to get in touch for full-time roles, contracts, or technical inquiries.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>Write Email</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="luxury-card p-6 sm:p-8 rounded-3xl flex flex-col gap-4 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    GitHub Profile
                  </span>
                  <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <a
                  href="https://github.com/maheen02-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-bold text-white hover:text-sky-300 transition-colors"
                >
                  github.com/maheen02-coder
                </a>

                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Inspect repositories, commit histories, architectural patterns, and codebases.
                </p>

                <div className="pt-2">
                  <a
                    href="https://github.com/maheen02-coder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    <span>Visit Profile</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Availability Indicator */}
            <ScrollReveal variant="fade-up" delay={250}>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Studio Availability
                  </span>
                  <span className="text-xs text-slate-400 font-light">
                    Open to select full-time roles, engineering contracts &amp; client collaborations.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Column */}
          <div className="luxury-card p-6 sm:p-10 rounded-3xl flex flex-col justify-center lg:w-7/12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    Fill out the form below. Real-time validation is active.
                  </p>
                </div>

                {/* Name & Email Fields (Flexbox) */}
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono uppercase tracking-wider text-slate-300"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-white/10 focus:border-sky-400 focus:bg-white/[0.06]"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 font-mono">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono uppercase tracking-wider text-slate-300"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-white/10 focus:border-sky-400 focus:bg-white/[0.06]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 font-mono">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono uppercase tracking-wider text-slate-300"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Engineering Role / Project Scope"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: null });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.subject
                        ? "border-rose-500 focus:border-rose-400"
                        : "border-white/10 focus:border-sky-400 focus:bg-white/[0.06]"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-rose-400 font-mono">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono uppercase tracking-wider text-slate-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-rose-500 focus:border-rose-400"
                        : "border-white/10 focus:border-sky-400 focus:bg-white/[0.06]"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 font-mono">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="btn-magnetic w-full py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Format &amp; Review Message</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-mono">
                  Honest communication • Direct to maheensidhu2@gmail.com
                </p>
              </form>
            ) : (
              /* Honest Submission Feedback Container */
              <div className="flex flex-col gap-6 py-4 animate-fadeIn">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">Message Validated &amp; Ready</span>
                    <span className="text-xs text-emerald-400/80">
                      Prepared for delivery to Maheen Abrar.
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-slate-300 text-sm font-light leading-relaxed">
                  <p>
                    Thank you, <span className="text-white font-medium">{formData.name}</span>!
                  </p>
                  <p>
                    This portfolio runs client-side without an external backend or tracking database to protect privacy. To guarantee your message arrives instantly, choose one of the direct delivery options below:
                  </p>
                </div>

                {/* Formatted Message Summary Card */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-slate-300 flex flex-col gap-1.5 max-h-40 overflow-y-auto">
                  <div className="text-slate-400">To: {CONTACT_EMAIL}</div>
                  <div className="text-slate-400">Subject: {formData.subject}</div>
                  <div className="text-slate-500 border-t border-white/10 pt-1.5 mt-1 whitespace-pre-wrap">
                    {formData.message}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={mailtoLink}
                    className="flex-1 py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Launch Mail App</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="flex-1 py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{copiedMessage ? "Copied!" : "Copy Full Note"}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors text-center cursor-pointer pt-2"
                >
                  ← Edit or compose another note
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
