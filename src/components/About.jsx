import AboutImage from '../coding.png';
import SectionHeading from './SectionHeading';

function About() {
  return (
    <section id="about" className="about container">
      <SectionHeading eyebrow="About Me" title="I turn ideas into practical, polished products." />
      <div className="about-content">
        <div className="about-text">
          <p>
           Full-Stack Developer and Computer Science undergraduate with hands-on experience building scalable web applications using Node.js, Spring Boot, JavaScript, MySQL, Firebase, and Generative AI technologies. Experienced in backend development, REST APIs, authentication, real-time applications, database design, and AI-powered software solutions through academic and personal projects.
          </p>
        </div>
        <div className="about-image">
          <img src={AboutImage} alt="Illustration of a developer working on a laptop" />
        </div>
      </div>
    </section>
  );
}

export default About;
