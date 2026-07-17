import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((current) => !current);
  const closeNav = () => setNavOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#home" className="logo">Abdul Wasay Rais</a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          type="button"
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links${navOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeNav}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
