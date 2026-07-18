import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import FormationSection from '../components/sections/FormationSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';

export default function Portfolio() {
  const [page, setPage] = useState('accueil');
  const [expIndex, setExpIndex] = useState(0);
  const [filtre, setFiltre] = useState('Tous');

  function goTo(id) {
    setPage(id);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Nav page={page} goTo={goTo} />
      {page === 'accueil' && <HeroSection goTo={goTo} />}
      {page === 'experience' && <ExperienceSection expIndex={expIndex} setExpIndex={setExpIndex} />}
      {page === 'formation' && <FormationSection />}
      {page === 'projets' && <ProjectsSection filtre={filtre} setFiltre={setFiltre} />}
      {page === 'competences' && <SkillsSection />}
      {page === 'contact' && <ContactSection />}
      <Footer goTo={goTo} />
    </>
  );
}
