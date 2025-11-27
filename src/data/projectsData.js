// Projects data for portfolio
// Add your real projects here with actual information

export const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/projects/ecommerce.jpg", // Add your project images to public/projects/
        githubUrl: "https://github.com/yourusername/ecommerce",
        liveUrl: "https://your-ecommerce-demo.com",
        featured: true,
        category: "Full Stack"
    },
    {
        id: 2,
        title: "Incident Management System",
        description: "Incident Management System for university UTP. And Proactive Maintenance System for universities and colleges.",
        technologies: ["React", "Node.js", "MySQL", "Spring Boot"],
        image: "/projects/taskmanager.jpg",
        githubUrl: "https://github.com/MCRLogPose/SIGISWEBAPP",
        liveUrl: "https://sigis-front.vercel.app/",
        featured: true,
        category: "Full Stack"
    },
    {
        id: 3,
        title: "AI Chat Application",
        description: "Real-time chat application with AI-powered responses, message encryption, and multimedia support.",
        technologies: ["Next.js", "OpenAI API", "PostgreSQL", "WebSocket"],
        image: "/projects/aichat.jpg",
        githubUrl: "https://github.com/yourusername/ai-chat",
        liveUrl: "https://your-aichat-demo.com",
        featured: true,
        category: "Full Stack"
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "Interactive weather dashboard with forecasts, maps, and historical data visualization.",
        technologies: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
        image: "/projects/weather.jpg",
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        liveUrl: "https://your-weather-demo.com",
        featured: false,
        category: "Frontend"
    },
    {
        id: 5,
        title: "Portfolio CMS",
        description: "Content management system for portfolio websites with drag-and-drop builder and SEO optimization.",
        technologies: ["React", "Express", "MySQL", "AWS S3"],
        image: "/projects/cms.jpg",
        githubUrl: "https://github.com/yourusername/portfolio-cms",
        liveUrl: "https://your-cms-demo.com",
        featured: false,
        category: "Full Stack"
    },
    {
        id: 6,
        title: "Fitness Tracker",
        description: "Mobile-responsive fitness tracking app with workout plans, progress charts, and social features.",
        technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
        image: "/projects/fitness.jpg",
        githubUrl: "https://github.com/yourusername/fitness-tracker",
        liveUrl: "https://your-fitness-demo.com",
        featured: false,
        category: "Mobile"
    }
];

// Get featured projects (for home page)
export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured).slice(0, 3);
};

// Get all projects
export const getAllProjects = () => {
    return projectsData;
};

// Get projects by category
export const getProjectsByCategory = (category) => {
    return projectsData.filter(project => project.category === category);
};
