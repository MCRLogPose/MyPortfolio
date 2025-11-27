import BaseLayout from "@/layouts/BaseLayout"

import { getAllProjects } from "@/data/projectsData"
import ProjectCard from "@/components/projects/ProjectCard"

const ProjectsPage = () => {
    const projects = getAllProjects();

    return (
        <BaseLayout>
            <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            My Projects
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            A collection of my work in software engineering, web development, and design.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Empty State (if needed) */}
                    {projects.length === 0 && (
                        <div className="text-center text-gray-400 py-20">
                            <p className="text-xl">No projects found. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </BaseLayout>
    );
};

export default ProjectsPage;
