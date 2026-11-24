import "./Contact.css";

const address =
  "3/1713, New Guruvayurappan Nagar, Vavipalayam, Tirupur";
const mapLocation = "599Q+V8J Kalipalayam, Tamil Nadu";
const mapQuery = encodeURIComponent(mapLocation);

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const enquiry = [
      "New catering enquiry",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Event: ${formData.get("event")}`,
      `Message: ${formData.get("message")}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/918754021440?text=${encodeURIComponent(enquiry)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-form-card">
          <p className="eyebrow">Get in touch</p>
          <h2>Book Your Feast</h2>
          <p className="contact-intro">
            Tell us about your event and we will prepare a menu made for the
            moment.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                required
              />
            </label>
            <label>
              Event type
              <select name="event" required>
                <option>Marriage Function</option>
                <option>Baby Shower</option>
                <option>Puberty Function</option>
                <option>House Warming Ceremony</option>
                <option>Other Event</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="3"
                placeholder="Tell us about your event"
                required
              />
            </label>
            <button className="button" type="submit">
              Send enquiry <span>→</span>
            </button>
          </form>
        </div>
        <div className="contact-map-card">
          <div className="contact-details">
            <p className="eyebrow">Visit us</p>
            <h2>Plan your celebration with us.</h2>
            <p>{address}</p>
            <a href="tel:+918754021440">+91 8754021440</a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">
              Open location in Google Maps →
            </a>
          </div>
          <a
            className="map-frame"
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Open MJ Catering address in Google Maps"
          >
            <iframe
              title="MJ Catering location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
