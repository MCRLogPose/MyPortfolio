
import { getFeaturedProjects } from "@/data/projectsData"
import ProjectCard from "@/components/projects/ProjectCard"

const Projects = () => {
    const projects = getFeaturedProjects();
    return (
        <div className="text-white text-center p-6 sm:p-10 w-full max-w-[1200px] mx-auto bg-gray-950/75 rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">Principal Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;