import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Toaster } from "react-hot-toast";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foregorund overflow-x-hidden">
      {/* Theme Toggle */}

      <ThemeToggle />

      {/* Background Effect */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main contant */}
      <Toaster position="top-right" />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />

      {/* Footer */}
    </div>
  );
};
