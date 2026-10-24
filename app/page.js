import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundGlows from "./components/BackgroundGlows";
import AtmosphericParticles from "./components/AtmosphericParticles";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#030407] text-[#f1f5f9] flex flex-col overflow-x-hidden">
      {/* Restrained Atmospheric Luminous Particles (Canvas) */}
      <AtmosphericParticles />

      {/* Cinematic Ambient Volumetric Lighting */}
      <BackgroundGlows />

      {/* Desktop Left-Side Vertical Navigation & Mobile Top Header */}
      <Navbar />

      {/* Main Content Area Offset by Desktop Left Sidebar */}
      <div className="flex-1 flex flex-col w-full lg:pl-64 xl:pl-72 transition-all duration-300">
        <main className="flex-1 flex flex-col w-full">
          {/* Hero Section with Video Background, Staggered Letters, and Mouse Parallax */}
          <Hero />

          {/* About Section: Editorial Architecture Profile & Core Pillars */}
          <About />

          {/* Skills Section: Authentic Engineering Taxonomy & Card Shaders */}
          <Skills />

          {/* Projects Section: Selected Works with Mask Reveals & Interactive Modal */}
          <Projects />

          {/* Contact Section: Validated Form & Honest Submission Channels */}
          <Contact />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />
      </div>
    </div>
  );
}
