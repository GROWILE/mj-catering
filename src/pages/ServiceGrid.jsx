import SectionHeading from "../components/SectionHeading";
import "./ServiceGrid.css";
import marriageImage from "../assets/services/marriage.jpg";
import babyShowerImage from "../assets/services/baby-shower.jpg";
import pubertyImage from "../assets/services/puberty.jpg";
import houseWarmingImage from "../assets/services/house-warming.jpg";
import otherEventsImage from "../assets/services/other-events.jpg";

const services = [
  [
    "Marriage function",
    "Elegant catering for your special celebration.",
    marriageImage,
  ],
  [
    "Baby Shower",
    "Beautiful catering for a joyful celebration.",
    babyShowerImage,
  ],
  [
    "Puberty function",
    "Thoughtful menus for a memorable family event.",
    pubertyImage,
  ],
  [
    "House Warming",
    "Warm and delicious catering for your new home.",
    houseWarmingImage,
  ],
  [
    "Other Event",
    "Flavourful catering for every occasion.",
    otherEventsImage,
  ],
];

const imageUrl = (path) => path;

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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;
