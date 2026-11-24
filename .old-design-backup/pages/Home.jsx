import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureStrip from "../components/FeatureStrip";
import ServiceGrid from "../components/ServiceGrid";
import About from "../components/About";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main aria-label="MJ Catering home page">
        <Hero />
        <FeatureStrip />
        <ServiceGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
