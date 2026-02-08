import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div className="card">
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList