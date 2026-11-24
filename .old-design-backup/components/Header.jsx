import { useEffect, useState } from "react";
import "./Header.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About us", id: "about-us" },
  { label: "Services", id: "services" },
  { label: "Menus", id: "menus" },
  { label: "Contact", id: "contact" },
];

function getActiveSection() {
  return window.location.hash.slice(1) || "home";
}

function Header() {
  const [activeSection, setActiveSection] = useState(getActiveSection);

  useEffect(() => {
    const handleHashChange = () => setActiveSection(getActiveSection());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="MJ Catering home">
        <img src="/mj-catering-home.png" alt="MJ Catering" />
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            href={`#${item.id}`}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button button-small" href="#contact">
        Get a quote <span>→</span>
      </a>
    </header>
  );
}

export default Header;
