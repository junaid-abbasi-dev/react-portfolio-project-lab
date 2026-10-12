function ProjectList({projects}) {
    return (
        <>
        <div id="project-list">
            {projects.map((project) => {
                return (
                    <main className="project" key={project.id}>
                        <img src={project.image} alt={project.name}/>
                        <div>
                            <h3>{project.name}</h3>
                            <p>{project.about}</p>
                        </div>
                    </main>
                )
            })} 
        </div>
        </>
    )
}
export default ProjectList;