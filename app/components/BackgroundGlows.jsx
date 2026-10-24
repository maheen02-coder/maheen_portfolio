export default function BackgroundGlows() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Mid-Page Subtle Atmospheric Glows (Positioned below Hero so video is 100% crisp) */}
      <div className="absolute -right-40 top-[45%] h-[550px] w-[550px] rounded-full bg-blue-600/8 blur-[130px] animate-ambient-2" />

      {/* Lower Page Indigo Flare */}
      <div className="absolute -left-40 bottom-[15%] h-[500px] w-[500px] rounded-full bg-indigo-500/6 blur-[120px] animate-ambient-1" />

      {/* Ultra-subtle Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
