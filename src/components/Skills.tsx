import { useInView } from '../hooks/useAnimations';
import './Skills.css';

interface HardSkill {
  name: string;
  icon: string;
  stars: number;
}

interface SoftSkill {
  name: string;
  icon: string;
}

interface Language {
  name: string;
  icon: string;
  level: string;
}

const HARD_SKILLS: HardSkill[] = [
  { name: 'JavaScript', icon: 'img/javascript.svg', stars: 2 },
  { name: 'HTML5', icon: 'img/html-icon.svg', stars: 3 },
  { name: 'CSS3', icon: 'img/css-icon.svg', stars: 3 },
  { name: 'React', icon: 'img/react-js-icon.svg', stars: 2 },
  { name: 'Bootstrap', icon: 'img/bootstrap.svg', stars: 3 },
  { name: 'Git', icon: 'img/git-icon.svg', stars: 2 },
];

const SOFT_SKILLS: SoftSkill[] = [
  { name: 'Creativity', icon: 'img/invention-icon.svg' },
  { name: 'Teamwork', icon: 'img/trabalho-em-equipe.png' },
  { name: 'Empathy', icon: 'img/empatiaa.png' },
  { name: 'Leadership', icon: 'img/leader.png' },
  { name: 'Analytical Thinking', icon: 'img/habilidad-analitica.png' },
];

const LANGUAGES: Language[] = [
  { name: 'Portuguese', icon: 'img/portuguese.svg', level: 'Native' },
  { name: 'English', icon: 'img/english.svg', level: 'B2' },
  { name: 'Spanish', icon: 'img/spain.svg', level: 'B2' },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="skills__stars">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const LEGEND = [
  { stars: 5, label: 'Expert' },
  { stars: 4, label: 'Advanced' },
  { stars: 3, label: 'Intermediate' },
  { stars: 2, label: 'Beginner' },
  { stars: 1, label: 'Basic' },
];

export function Skills() {
  const [headerRef, headerInView] = useInView(0.1);
  const [hardRef, hardInView] = useInView(0.1);
  const [softRef, softInView] = useInView(0.1);
  const [langRef, langInView] = useInView(0.1);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 ref={headerRef} className={`section-heading ${headerInView ? 'animate-fade-in-up' : ''}`} style={{ opacity: headerInView ? 1 : 0 }}>
          My <span className="accent">Skills</span>
        </h2>

        <div className="skills__intro">
          <p>
            The main area of expertise is <strong className="gradient-text">front end development</strong> (client side of the web).
          </p>
          <p>
            I'm a Web Development Student with knowledge in technologies such as <strong className="gradient-text">HTML, CSS, Bootstrap,</strong> and <strong className="gradient-text">React.</strong> I'm currently learning programming languages like <strong className="gradient-text">JavaScript</strong>. I have strong soft skills including leadership, <strong className="gradient-text">creativity</strong>, empathy, teamwork, and <strong className="gradient-text">analytical thinking</strong>. Additionally, I have an intermediate level of proficiency in English and Spanish.
          </p>
        </div>

        {/* Legend */}
        <div className="skills__legend">
          <p className="skills__legend-title gradient-text">Skills Difficulty Levels</p>
          <div className="skills__legend-items">
            {LEGEND.map(item => (
              <div key={item.label} className="skills__legend-item">
                <Stars count={item.stars} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__grid">
          {/* Hard Skills */}
          <div ref={hardRef} className={`skills__column ${hardInView ? 'animate-fade-in-up' : ''}`} style={{ opacity: hardInView ? 1 : 0 }}>
            <h3 className="skills__column-title">Hard Skills</h3>
            <div className="skills__items">
              {HARD_SKILLS.map(skill => (
                <div key={skill.name} className="skills__item glass-card">
                  <img src={skill.icon} alt={skill.name} className="skills__item-icon" />
                  <Stars count={skill.stars} />
                  <p className="skills__item-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="skills__divider">
            <div className="skills__divider-line" />
          </div>

          {/* Soft Skills */}
          <div ref={softRef} className={`skills__column ${softInView ? 'animate-fade-in-up' : ''}`} style={{ opacity: softInView ? 1 : 0, animationDelay: '0.2s' }}>
            <h3 className="skills__column-title">Soft Skills</h3>
            <div className="skills__items">
              {SOFT_SKILLS.map(skill => (
                <div key={skill.name} className="skills__item glass-card">
                  <img src={skill.icon} alt={skill.name} className="skills__item-icon" />
                  <p className="skills__item-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div ref={langRef} className={`skills__languages ${langInView ? 'animate-fade-in-up' : ''}`} style={{ opacity: langInView ? 1 : 0 }}>
          <h3 className="skills__column-title">Languages</h3>
          <div className="skills__lang-grid">
            {LANGUAGES.map(lang => (
              <div key={lang.name} className="skills__lang-item glass-card">
                <img src={lang.icon} alt={lang.name} className="skills__item-icon" />
                <p className="skills__item-name">{lang.name}</p>
                <span className="skills__lang-level gradient-text">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
