import "./About.css";
import aboutFood from "../assets/about-food.jpg";

function About() {
  return (
    <section className="section container about" id="about-us">
      <img
        src={aboutFood}
        alt="A chef carefully plating an elegant dish"
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
      </div>
    </section>
  );
}

export default About;
