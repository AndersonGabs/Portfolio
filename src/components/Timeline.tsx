import { useInView } from '../hooks/useAnimations';
import './Timeline.css';

interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const TIMELINE_DATA: TimelineEntry[] = [
  {
    year: 'February 2026 – Present',
    title: 'Project Coordinator',
    subtitle: 'Hemisfério Didático, Portugal',
    description: 'Coordination of Erasmus+ projects, including support in writing Erasmus+ and CoVe (Centres of Vocational Excellence) applications. Responsible for maintaining and updating the institutional website content, document translation, and content production for social media and newsletter.',
  },
  {
    year: 'September 2025 – February 2026',
    title: 'Full-Stack Web Developer (Extracurricular Internship)',
    subtitle: 'Hemisfério Didático, Portugal',
    description: 'Responsible for the architecture and development of the new institutional portal, using Next.js, React and Tailwind CSS for a high-performance application, with Firebase for data management. Full deployment, including domain (.pt) configuration, DNS and SEO. Supported Virtual Reality (Unity) projects in an international environment (Erasmus+).',
  },
  {
    year: 'February 2025 – July 2025',
    title: 'IPB Transportes — Academic Project',
    subtitle: 'Instituto Politécnico de Bragança',
    description: 'Developed the IPB Transportes mobility app using Expo, React Native and TypeScript, with LottieFiles animations for a smooth interface, including secure login with Firebase Auth and profile data storage via Firebase.',
  },
  {
    year: '2025 - now',
    title: 'International Exchange in Portugal',
    subtitle: 'Polytechnic Institute of Bragança',
    description: 'Studying Information Technology with a focus on Front-End development in a multicultural environment with students from around the world. The experience has strengthened my technical skills and allowed me to communicate daily in English and Spanish.',
  },
  {
    year: '2023 - 2025',
    title: 'Information Technology Management',
    subtitle: 'Fatec Guaratinguetá',
    description: 'Technologist degree in IT focused on systems, networks, programming, databases, and providing technical solutions in various business environments.',
  },
  {
    year: '2023 - 2025',
    title: 'Electronics Technician',
    subtitle: 'Eletro Denis',
    description: 'Experienced electronics technician specializing in TV repair, diagnosing and fixing circuit issues, power supply problems, and display malfunctions efficiently.',
  },
  {
    year: '2015',
    title: 'Digital Content Assistant',
    subtitle: 'A12.com',
    description: 'Experienced Digital Content Assistant at a12.com, skilled in data entry, accuracy, speed, content formatting, and online platform content management.',
  },
  {
    year: '2013',
    title: 'IT Technician',
    subtitle: 'Tableau College',
    description: 'Completed a 1.5-semester technical course (1000 hours) focused on computer hardware, networks, software, and programming.',
  },
];

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [ref, isInView] = useInView(0.2);
  const isEven = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`timeline__item ${isEven ? 'timeline__item--right' : 'timeline__item--left'} ${isInView ? 'timeline__item--visible' : ''}`}
    >
      <div className="timeline__dot" />
      <div className="timeline__date">{entry.year}</div>
      <div className="timeline__card glass-card">
        <h3 className="timeline__card-title">
          {entry.title}
          <span className="timeline__card-subtitle"> — {entry.subtitle}</span>
        </h3>
        <p className="timeline__card-description">{entry.description}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  const [ref, isInView] = useInView(0.05);

  return (
    <section id="aboutme" className="timeline section">
      <div className="container">
        <h2 ref={ref} className={`section-heading ${isInView ? 'animate-fade-in-up' : ''}`} style={{ opacity: isInView ? 1 : 0 }}>
          About <span className="accent">me</span>
        </h2>
        <div className="timeline__wrapper">
          <div className="timeline__line" />
          {TIMELINE_DATA.map((entry, i) => (
            <TimelineItem key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
