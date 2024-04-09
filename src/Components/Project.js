export default function Project({
  title = "Project Title",
  description = "project description",
  websiteLink = "",
  githubLink = "",
}) {
  return (
    <div className="projects">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-links">
        <a href={`${websiteLink}`} alt={title} target="blank">
          Project Link
        </a>
        <a href={`${githubLink}`} alt={title} target="blank">
          Repo Link
        </a>
      </div>
    </div>
  );
}
