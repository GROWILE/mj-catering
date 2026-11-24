import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/mj-catering-home.png";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About us", id: "about-us" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const whatsappUrl =
  "https://wa.me/918754021440?text=" +
  encodeURIComponent("Hello MJ Catering, I would like to enquire about your catering services.");

function getActiveSection() {
  return window.location.hash.slice(1) || "home";
}

function Header() {
  const [activeSection, setActiveSection] = useState(getActiveSection);

  useEffect(() => {
    let syncTimer;
    const handleHashChange = () => {
      setActiveSection(getActiveSection());
      window.clearTimeout(syncTimer);
      syncTimer = window.setTimeout(updateActiveSection, 500);
    };
    const updateActiveSection = () => {
      const headerOffset = 110;
      const scrollPosition = window.scrollY + headerOffset;
      let currentSection = "home";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        const sectionTop = section
          ? section.getBoundingClientRect().top + window.scrollY
          : Infinity;

        if (sectionTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("scrollend", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("scrollend", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.clearTimeout(syncTimer);
    };
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="MJ Catering home">
        <img src={logo} alt="MJ Catering" />
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
      <a
        className="button button-small"
        href="#contact"
      >
        Get a quote <span>→</span>
      </a>
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with MJ Catering on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.2A12.8 12.8 0 0 0 5 22.6L3.3 28.8l6.4-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.3c-2 0-4-.6-5.7-1.7l-.4-.2-3.8 1 1-3.7-.3-.4A10.4 10.4 0 1 1 16 26.5Zm5.7-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.3-.6.1-1.7-.8-2.8-1.5-4-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.2 1.3 3.4c.2.2 2.2 3.4 5.3 4.8 2 .9 2.8 1 3.8.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.2-.3-.3-.6-.4Z" />
        </svg>
      </a>
    </header>
  );
}

export default Header;
