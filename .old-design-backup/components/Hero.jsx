import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <p className="eyebrow">Catering for every occasion</p>
        <h1>
          Delicious Food.
          <br />
          Memorable Moments.
        </h1>
        <p className="hero-copy">
          From intimate gatherings to grand celebrations, we create flavourful
          experiences tailored to your event.
        </p>
        <div className="hero-actions">
          <a className="button" href="#contact">
            Get a quote <span>→</span>
          </a>
          <a className="button button-outline" href="#menus">
            Explore menus
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
