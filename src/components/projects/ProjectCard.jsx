import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10" />

                {/* Placeholder for project image - replace with actual images */}
                <div className="w-full h-full flex items-center justify-center text-gray-600 text-6xl font-bold">
                    {project.title.charAt(0)}
                </div>

                {/* Overlay on hover */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-800/90 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={18} />
                                <span className="text-sm font-medium">Code</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-blue-600/90 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={18} />
                                <span className="text-sm font-medium">Live</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-5 sm:p-6">
                {/* Category Badge */}
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                        {project.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gray-800/80 text-gray-300 rounded-md border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl" />
            </div>
        </div>
    );
};

export default ProjectCard;
