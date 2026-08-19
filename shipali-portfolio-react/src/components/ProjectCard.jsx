function ProjectCard({ title, image, description, github, live, colorClass }) {
  return (
    <div className={`project-card ${colorClass}`}>
        <div className="card-title">{title}</div>

        <img src={image} alt={title} />
        <p>{description}</p>

        <div>
            <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
            </a>

            {live && (
                <>
                    {"  ||  "}
                    <a href={live} target="_blank" rel="noopener noreferrer">Check Live</a>
                </>
            )}
        </div>
    </div>
    );  
}

export default ProjectCard;