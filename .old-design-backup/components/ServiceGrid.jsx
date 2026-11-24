import SectionHeading from "./SectionHeading";
import "./ServiceGrid.css";

const services = [
  [
    "Wedding catering",
    "Elegant catering for your special day.",
    "photo-1464366400600-7168b8af9bc3",
  ],
  [
    "Corporate events",
    "Professional service for meetings and events.",
    "photo-1507504031003-b417219a0fde",
  ],
  [
    "Social events",
    "Birthdays, anniversaries, showers and more.",
    "photo-1482049016688-2d3e1b311543",
  ],
  [
    "Private parties",
    "Intimate gatherings made exceptional.",
    "photo-1547592180-85f173990554",
  ],
  [
    "Special diets",
    "Flavourful choices for every preference.",
    "photo-1543353071-873f17a7a088",
  ],
];

const imageUrl = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`;

function ServiceGrid() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Our services"
          title="Catering for Every Occasion"
        />
        <div className="service-grid">
          {services.map(([title, text, image]) => (
            <article className="service-card" key={title}>
              <img src={imageUrl(image)} alt={title} />
              <div className="service-card-body">
                <span className="service-mark">✦</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">
                  Learn more <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;
