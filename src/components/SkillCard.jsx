function SkillCard({ icon, title, description }) {
  return (
    <article className="card">
      <i className={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default SkillCard;
