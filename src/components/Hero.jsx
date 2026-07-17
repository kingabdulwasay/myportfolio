function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <p className="eyebrow">Hello, I’m Abdul Wasay Rais</p>
        <h1>Full Stack Developer crafting modern digital experiences.</h1>
        <p className="hero-text">
          I build clean, responsive websites and applications with a strong focus on performance, accessibility, and user experience.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Let’s Talk</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/kingabdulwasay" target="_blank" rel="noreferrer">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/abdulwasayraiskz/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto:awasay245@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="card-badge">Available for freelance work</div>
        <h2>What I do</h2>
        <ul>
          <li><i className="fas fa-code" /> Frontend development</li>
          <li><i className="fas fa-server" /> Backend APIs</li>
          <li><i className="fas fa-database" /> Database design</li>
          <li><i className="fas fa-robot" />Generative AI</li>

        </ul>
      </div>
    </section>
  );
}

export default Hero;
