import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import './Header.css';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'About me', href: '#aboutme' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contacts', href: '#contact' },
];

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#home" className="header__logo">
          <img src="img/logo.png" alt="Anderson Gabriel" className="header__logo-img" />
        </a>

        <button
          className={`header__hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`header__nav-link ${activeSection === item.href ? 'header__nav-link--active' : ''}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}
