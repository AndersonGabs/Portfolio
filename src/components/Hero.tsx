import { useTypingAnimation } from '../hooks/useAnimations';
import { useInView } from '../hooks/useAnimations';
import './Hero.css';

const DEV_ROLES = ['Full Stack Developer', 'Web Designer', 'Project Coordinator'];

const SOCIAL_LINKS = [
  { icon: 'instagram', url: 'https://www.instagram.com/anderson_bieel/', label: 'Instagram' },
  { icon: 'facebook', url: 'https://www.facebook.com/share/16HJjC55kL/', label: 'Facebook' },
  { icon: 'github', url: 'https://github.com/AndersonGabs', label: 'GitHub' },
  { icon: 'linkedin', url: 'https://www.linkedin.com/in/andersongabriell', label: 'LinkedIn' },
];

function SocialIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  };
  return <>{icons[icon]}</>;
}

export function Hero() {
  const typedText = useTypingAnimation(DEV_ROLES, 80, 2000);
  const [ref, isInView] = useInView(0.05);

  return (
    <section id="home" className="hero">

      {/* ── Background image (always full-cover, never changes with theme) ── */}
      <div className="hero__bg">
        <img src="img/gabrielhero.jpg" alt="Anderson Gabriel" className="hero__bg-img" />
        <div className="hero__overlay hero__overlay--left" />
        <div className="hero__overlay hero__overlay--right" />
      </div>

      {/* ── Content layer ── */}
      <div ref={ref} className={`hero__content-layer ${isInView ? 'hero__content-layer--visible' : ''}`}>

        {/*
          ── CENTER TITLES ──
          "Hi, I'm" flush to right of left half (= center of screen)
          "Anderson" flush to left of right half (= center of screen)
          Positioned at the TOP — above person's head
        */}
        <div className="hero__center-titles">
          <div className="hero__center-left">
            <h1 className="hero__title hero__title--coord">Hi, I'm</h1>
            <p className="hero__role-label">I'm a</p>
          </div>
          <div className="hero__center-right">
            <h1 className="hero__title hero__title--dev">Anderson</h1>
            <p className="hero__role-typed">
              <span className="hero__typed">{typedText}</span>
              <span className="hero__cursor">|</span>
            </p>
          </div>
        </div>

        {/* ── BOTTOM SIDES — coordinator left, dev right ── */}
        <div className="hero__sides">

          {/* Left — Coordinator */}
          <div className="hero__side-content hero__side-content--left">
            <p className="hero__desc">
              Project Coordinator with strong leadership and analytical thinking.
              Experienced in managing timelines, aligning cross-functional teams,
              and delivering results through structured planning and clear communication.
            </p>
            <div className="hero__badges">
              <div className="hero__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>Planning</span>
              </div>
              <div className="hero__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span>Team Lead</span>
              </div>
              <div className="hero__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                <span>Analytics</span>
              </div>
            </div>
            <span className="hero__tag">coordinator</span>
          </div>

          {/* Right — Dev */}
          <div className="hero__side-content hero__side-content--right">
            <p className="hero__desc">
              Passionate about front-end development and programming, currently pursuing
              a Technologist degree in Information Technology. Strong analytical skills,
              always seeking to expand my abilities in web development.
            </p>
            <div className="hero__badges">
              <div className="hero__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span>Code</span>
              </div>
              <div className="hero__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <span>React</span>
              </div>
              <div className="hero__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span>Frontend</span>
              </div>
            </div>
            <div className="hero__socials">
              {SOCIAL_LINKS.map(link => (
                <a key={link.icon} href={link.url} target="_blank" rel="noopener noreferrer"
                   className="hero__social-link" aria-label={link.label}>
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
            <span className="hero__tag">&lt;developer/&gt;</span>
          </div>

        </div>
      </div>
    </section>
  );
}
