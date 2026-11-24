import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="cta" id="contact">
        <div className="container">
          <div>
            <p className="eyebrow">Plan your celebration</p>
            <h2>Let's Make Your Event Unforgettable.</h2>
            <p>
              Tell us about your event and we will prepare a menu made for the
              moment.
            </p>
          </div>
          <a className="button button-gold" href="mailto:hello@mjcatering.in">
            Get a free quote <span>→</span>
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="footer-brand" href="#home">
              MJ <span>CATERING</span>
            </a>
            <p>Delicious food, impeccable service, unforgettable events.</p>
          </div>
          <div>
            <h3>Quick links</h3>
            <a href="#home">Home</a>
            <a href="#about-us">About us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div id="menus">
            <h3>Services</h3>
            <a href="#services">Wedding catering</a>
            <a href="#services">Corporate events</a>
            <a href="#services">Social events</a>
            <a href="#services">Private parties</a>
          </div>
          <div>
            <h3>Contact us</h3>
            <p>Chennai, Tamil Nadu, India</p>
            <a href="tel:+919000000000">+91 90000 00000</a>
            <a href="mailto:hello@mjcatering.in">hello@mjcatering.in</a>
          </div>
        </div>
        <div className="container copyright">
          © 2026 MJ Catering. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
