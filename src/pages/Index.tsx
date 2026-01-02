import { useState, useEffect } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ResearchSection } from '../components/sections/ResearchSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { WorkshopsSection } from '../components/sections/WorkshopsSection';
import { CVSection } from '../components/sections/CVSection';
import { ContactSection } from '../components/sections/ContactSection';
import { FooterSection } from '../components/sections/FooterSection';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'research', 'skills', 'workshops', 'cv', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnterSystem = () => {
    setHasEntered(true);
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Navigation activeSection={activeSection} isVisible={hasEntered} />

      <div id="hero">
        <HeroSection onEnterSystem={handleEnterSystem} />
      </div>

      {hasEntered && (
        <>
          <AboutSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
          <WorkshopsSection />
          <CVSection />
          <ContactSection />
          <FooterSection />
        </>
      )}
    </main>
  );
};

export default Index;
