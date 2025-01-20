import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MyServicesSection from './components/sections/MyServicesSection';
import ContactSection from './components/sections/ContactSection';
import ProjectsSection from './components/sections/ProjectsSection';

import '../styles/reset.css';

export default function Home() {
  return (
    
    <>
      <HeroSection />
      <AboutSection />
      <MyServicesSection />
      <ProjectsSection />
      <ContactSection /> 
    </>
      
  );
}
