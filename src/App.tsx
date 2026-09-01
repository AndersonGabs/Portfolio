import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/themes.css';
import './styles/global.css';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
