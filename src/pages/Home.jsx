import Navbar from "../components/Navbar";
import Hero from "./Hero";
import FeatureStrip from "../components/FeatureStrip";
import ServiceGrid from "./ServiceGrid";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main aria-label="MJ Catering home page">
        <Hero />
        <FeatureStrip />
        <ServiceGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
