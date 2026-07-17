import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-content">
          <p>© 2026 Abdul Wasay Rais. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
