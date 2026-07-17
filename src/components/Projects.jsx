import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

const projectItems = [
  {
    title: 'CatchHub UI',
    description: 'Created a responsive website by accurately recreating a given design. Focused on clean code and responsive layouts.',
  },
  {
    title: 'Social Media Platform',
    description: 'Built a core social networking website including user profiles, post creation, image uploads, real-time likes, and comments.',
  },
  {
    title: 'Snake and Ladder Game',
    description: 'Developed an interactive Player vs. Computer Snakes and Ladders web application using JavaScript.',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects container">
      <SectionHeading eyebrow="Projects" title="Selected work that reflects my style." />
      <div className="project-grid">
        {projectItems.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
