import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="cta">
        <div className="container">
          <div>
            <p className="eyebrow">Plan your celebration</p>
            <h2>Let's Make Your Event Unforgettable.</h2>
            <p>
              Tell us about your event and we will prepare a menu made for the
              moment.
            </p>
          </div>
          <a className="button button-gold" href="#contact">
            Get a free quote <span>→</span>
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="footer-brand" href="#home">
              <img src="/mj-logo.png" alt="MJ Catering" />
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
          <div>
            <h3>Services</h3>
            <a href="#services">Marriage Function</a>
            <a href="#services">Baby Shower</a>
            <a href="#services">Puberty Function</a>
            <a href="#services">House Warming Ceremony</a>
            <a href="#services">All Other Events</a>
          </div>
          <div>
            <h3>Contact us</h3>
            <p>3/1713, New Guruvayurappan Nagar, Vavipalayam, Tirupur</p>
            <a href="tel:+918754021440">+91 8754021440</a>
            <a href="mailto:mjcatering.tirupur@gmail.com">
              mjcatering.tirupur@gmail.com
            </a>
          </div>
        </div>
        <div className="container copyright">
          <span>© 2026 MJ Catering. All rights reserved.</span>
          <span>
            Designed &amp; Developed by{" "}
            <a href="https://growile.com/" target="_blank" rel="noreferrer">
              Growile
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
