import { useState } from 'react';
import { useInView } from '../hooks/useAnimations';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  techDetail: string;
  stars: number;
  images: string[];
  link?: string;
}

// ── Group 1: Development Projects ──────────────────────────────────────────
const DEV_PROJECTS: Project[] = [
  {
    id: 'frutiway',
    title: 'Frutiway',
    description: 'Mobile app developed in a group project to support and optimize local fruit and vegetable commerce, featuring an integrated PIX payment system.',
    technologies: 'Expo, React Native, Firebase, JavaScript.',
    techDetail: 'Cross-platform mobile app',
    stars: 3,
    images: ['img/fruti1.png', 'img/Fruti2.jpeg', 'img/fruti3.jpeg', 'img/fruti4.jpeg', 'img/fruti5.jpeg'],
  },
  {
    id: 'eletromaster-web',
    title: 'Eletro Master Web',
    description: 'This was my first academic project, developed in partnership with a real company. I contributed heavily to most of the code and system structure, with the final version presented to the company.',
    technologies: 'HTML, CSS, Bootstrap, JavaScript.',
    techDetail: 'Project hosted on GitHub',
    stars: 3,
    images: ['img/printeletromaster11.png'],
    link: 'https://andersongabs.github.io/EletroMaster/index.html',
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'Project created based on a tutorial, used as hands-on practice with React and API integration. The interface simulates Netflix and uses real data from the TMDb API to dynamically display movies and series.',
    technologies: 'React, CSS, TMDb API.',
    techDetail: 'Project hosted on GitHub Pages',
    stars: 2,
    images: ['img/netflix1.png'],
    link: 'https://andersongabs.github.io/Netflix/',
  },
  {
    id: 'eletromaster-system',
    title: 'Eletro Master System',
    description: 'Developed a CRUD system using Power Apps and SharePoint for internal data management at Eletro Master. The app allowed data management with a responsive interface.',
    technologies: 'Power Apps, SharePoint, Power BI.',
    techDetail: '',
    stars: 2,
    images: ['img/power.jpg'],
  },
  {
    id: 'ipb-transportes',
    title: 'IPB Transportes',
    description: 'Mobility app developed for Instituto Politécnico de Bragança using Expo, React Native and TypeScript, with LottieFiles animations for a smooth interface, secure login via Firebase Auth, and profile data storage via Firebase.',
    technologies: 'Expo, React Native, TypeScript, Firebase, LottieFiles.',
    techDetail: 'Academic project — IPB',
    stars: 3,
    images: ['img/preview.png'],
  },
  {
    id: 'hemisfério-didatico',
    title: 'Hemisfério Didático — Institutional Portal',
    description: 'Architecture and full development of the new institutional portal for Hemisfério Didático (Portugal). High-performance application with Firebase for data management. Full deployment including domain (.pt) configuration, DNS and SEO optimisation.',
    technologies: 'Next.js, React, Tailwind CSS, Firebase.',
    techDetail: 'Live website',
    stars: 3,
    images: ['img/hemisferioprint.png'],
    link: 'https://hemisferiodidatico.pt/',
  },
];

// ── Group 2: Erasmus+ / Coordination Projects ───────────────────────────────
interface CoordProject {
  id: string;
  title: string;
  description: string;
  tag: string;
}

const COORD_PROJECTS: CoordProject[] = [
  {
    id: 'vr-integration',
    title: 'IT Solutions through VR Integration',
    tag: 'Erasmus+ KA220-VET',
    description: 'Participated in strategic mobility meetings (Slovakia, Košice) to define technical architecture and roadmap, in collaboration with a six-country consortium.',
  },
  {
    id: 'agripath',
    title: 'AgriPath',
    tag: 'Erasmus+ KA210-VET',
    description: 'Prepared kickoff infopack and meeting minutes. Developed visual identity concepts for the project. Partnership with APPITAD (coordinator, Portugal), Balkan Bridge (Bulgaria), and IIENGO (Türkiye).',
  },
  {
    id: 're-ai',
    title: 'Re-AI',
    tag: 'Erasmus+ KA210-VET',
    description: 'Production of meeting minutes, progress reports, and newsletter, with partners in Estonia and Italy. Hemisfério Didático as national coordinator.',
  },
  {
    id: 'your-response',
    title: 'YOUR RESPONSE',
    tag: 'Erasmus+ KA210-YOU',
    description: 'Production of educational materials (documents, scenario cards, facilitator guide) and translation of curriculum modules into European Portuguese. Led a Local Lab at Escola Profissional Jean Piaget (Macedo de Cavaleiros).',
  },
  {
    id: 'ecolens-vet',
    title: 'EcoLens VET',
    tag: 'Erasmus+ KA220-VET',
    description: 'Partner in an international consortium (Portugal, Albania, Bulgaria, Türkiye), led by Instituto Politécnico de Bragança, focused on climate change awareness.',
  },
  {
    id: 'ai4vet',
    title: 'AI4VET Excellence Labs',
    tag: 'CoVe',
    description: 'Built the international consortium (Centre of Vocational Excellence in AI), liaised with partners from multiple countries, and wrote the application (Part B).',
  },
];

// ── Shared helpers ──────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="projects__stars">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length <= 1) {
    return (
      <div className="projects__image-wrapper">
        <img src={images[0]} alt={alt} className="projects__image" />
      </div>
    );
  }

  return (
    <div className="projects__carousel">
      <img src={images[currentIndex]} alt={`${alt} ${currentIndex + 1}`} className="projects__image" />
      <button
        className="projects__carousel-btn projects__carousel-btn--prev"
        onClick={(e) => { e.stopPropagation(); setCurrentIndex(i => (i - 1 + images.length) % images.length); }}
        aria-label="Previous image"
      >‹</button>
      <button
        className="projects__carousel-btn projects__carousel-btn--next"
        onClick={(e) => { e.stopPropagation(); setCurrentIndex(i => (i + 1) % images.length); }}
        aria-label="Next image"
      >›</button>
      <div className="projects__carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`projects__carousel-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function DevProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, isInView] = useInView(0.1);

  const handleClick = () => {
    if (project.link) window.open(project.link, '_blank');
  };

  return (
    <div
      ref={ref}
      className={`projects__card glass-card ${isInView ? 'animate-fade-in-up' : ''} ${project.link ? 'projects__card--clickable' : ''}`}
      style={{ opacity: isInView ? 1 : 0, animationDelay: `${index * 0.15}s` }}
      onClick={handleClick}
      role={project.link ? 'link' : undefined}
      tabIndex={project.link ? 0 : undefined}
    >
      <ImageCarousel images={project.images} alt={project.title} />
      <h3 className="projects__card-title gradient-text">{project.title}</h3>
      <Stars count={project.stars} />
      <p className="projects__card-desc">{project.description}</p>
      <p className="projects__card-tech">
        Technologies: <strong className="gradient-text">{project.technologies}</strong>
        {project.techDetail && ` ${project.techDetail}`}
      </p>
      {project.link && (
        <span className="projects__card-link">View Project →</span>
      )}
    </div>
  );
}

function CoordProjectCard({ project, index }: { project: CoordProject; index: number }) {
  const [ref, isInView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`projects__card projects__card--coord glass-card ${isInView ? 'animate-fade-in-up' : ''}`}
      style={{ opacity: isInView ? 1 : 0, animationDelay: `${index * 0.12}s` }}
    >
      <span className="projects__coord-tag">{project.tag}</span>
      <h3 className="projects__card-title gradient-text">{project.title}</h3>
      <p className="projects__card-desc">{project.description}</p>
    </div>
  );
}

// ── Main section ────────────────────────────────────────────────────────────

export function Projects() {
  const [ref, isInView] = useInView(0.05);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 ref={ref} className={`section-heading ${isInView ? 'animate-fade-in-up' : ''}`} style={{ opacity: isInView ? 1 : 0 }}>
          My <span className="accent">Projects</span>
        </h2>

        {/* ── Group 1: Development ── */}
        <div className="projects__group">
          <h3 className="projects__group-title">
            <span className="projects__group-icon">{'</>'}</span> Development Projects
          </h3>
          <div className="projects__grid">
            {DEV_PROJECTS.map((project, i) => (
              <DevProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* ── Group 2: Erasmus+ / Coordination ── */}
        <div className="projects__group">
          <h3 className="projects__group-title projects__group-title--coord">
            <span className="projects__group-icon">🌍</span> Erasmus+ / Coordination Projects
          </h3>
          <div className="projects__grid projects__grid--coord">
            {COORD_PROJECTS.map((project, i) => (
              <CoordProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
