import "./FeatureStrip.css";

const features = [
  [
    "♨",
    "Fresh & delicious",
    "We use the finest ingredients to craft meals your guests will love.",
  ],
  [
    "♧",
    "Customized menus",
    "Menus tailored to your theme, dietary needs and preferences.",
  ],
  [
    "♙",
    "Experienced team",
    "Professional chefs and service staff dedicated to every event.",
  ],
  [
    "♡",
    "Unforgettable events",
    "We focus on every detail so you can enjoy your special day.",
  ],
];

function FeatureStrip() {
  return (
    <section className="features container">
      {features.map(([icon, title, text]) => (
        <article className="feature" key={title}>
          <span className="feature-icon">{icon}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}

export default FeatureStrip;
