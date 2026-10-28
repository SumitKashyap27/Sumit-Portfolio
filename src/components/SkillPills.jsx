export default function SkillPills({ items }) {
  return (
    <div className="skill-pills">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
