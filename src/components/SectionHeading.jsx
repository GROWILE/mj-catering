import "./SectionHeading.css";

function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="section-heading" id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;
