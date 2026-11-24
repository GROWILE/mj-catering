import "./About.css";

function About() {
  return (
    <section className="section container about" id="about-us">
      <img
        src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85"
        alt="An elegant dining table prepared for an event"
      />
      <div className="about-copy">
        <p className="eyebrow">About us</p>
        <h2>
          A Passion for Food.
          <br />A Commitment to You.
        </h2>
        <p>
          MJ Catering brings people together with warm hospitality, generous
          flavour and attentive service. Every menu is prepared with care for a
          celebration that feels truly yours.
        </p>
        <ul>
          <li>Fresh, high-quality ingredients</li>
          <li>Creative and customizable menus</li>
          <li>Professional and friendly team</li>
          <li>Seamless planning and execution</li>
        </ul>
        <a className="text-link" href="#contact">
          Learn more about us <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default About;
