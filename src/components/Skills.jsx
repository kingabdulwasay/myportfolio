import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';

const skillItems = [
  {
    icon: 'fas fa-brush',
    title: 'Frontend',
    description: 'HTML, CSS, JavaScript and React JS for responsive layouts with API connectivity.',
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Backend',
    description: 'Node.js, Express, SpringBoot, REST APIs, Langchain and Firebase.',
  },
  {
    icon: 'fas fa-cloud',
    title: 'Deployment',
    description: 'Git, GitHub, Vercel, and Netlify for deployment and version control.',
  },
    {
    icon: 'fas fa-database',
    title: 'Database Design',
    description: 'MySQL, Mongo DB and SQL for structuring data and connection with backend.',
  },
];

function Skills() {
  return (
    <section id="skills" className="skills container">
      <SectionHeading eyebrow="Skills" title="Tools and technologies I use." />
      <div className="skill-grid">
        {skillItems.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
