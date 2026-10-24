"use client";

import { useEffect, useRef } from "react";

export default function AtmosphericParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    // Track mouse with smoothing
    let targetMouseX = width * 0.5;
    let targetMouseY = height * 0.5;
    let currentMouseX = targetMouseX;
    let currentMouseY = targetMouseY;

    const handlePointerMove = (e) => {
      if (!isFinePointer) return;
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;

      // Update CSS variables for desktop parallax
      const normX = (e.clientX / width - 0.5).toFixed(4);
      const normY = (e.clientY / height - 0.5).toFixed(4);
      document.documentElement.style.setProperty("--mouse-x", normX);
      document.documentElement.style.setProperty("--mouse-y", normY);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Restrained particle count for studio subtlety & performance (32 particles)
    const PARTICLE_COUNT = 32;
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.28 + 0.08,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25 - 0.08, // gentle upward drift
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        color: Math.random() > 0.4 ? "rgba(226, 232, 240," : "rgba(56, 189, 248,", // silver or subtle cyan
      });
    }

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        render();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastTime = performance.now();

    const render = () => {
      if (!isVisible) return;

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth mouse interpolation for subtle parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      const parallaxOffsetX = (currentMouseX - width * 0.5) * 0.02;
      const parallaxOffsetY = (currentMouseY - height * 0.5) * 0.02;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.phase += p.pulseSpeed;

        // Wrap around boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Subtle alpha breathing
        const alpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(p.phase));

        // Draw particle with soft halo
        ctx.beginPath();
        const renderX = p.x + parallaxOffsetX * (p.size * 0.8);
        const renderY = p.y + parallaxOffsetY * (p.size * 0.8);

        ctx.fillStyle = `${p.color} ${alpha.toFixed(3)})`;
        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] w-full h-full"
      aria-hidden="true"
    />
  );
}
