export default function SectionHeading({ eyebrow, children, className = "" }) {
  return (
    <div className={`section-heading ${className}`}>
      {eyebrow && <span className="section-kicker">{eyebrow}</span>}
      <h2>{children}</h2>
    </div>
  );
}
