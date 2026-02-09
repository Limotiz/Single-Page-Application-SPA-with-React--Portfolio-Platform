function ProjectItem({ project }) {
  return (
    <div className="project">
      <div className="project-img">✕</div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
export default ProjectItem