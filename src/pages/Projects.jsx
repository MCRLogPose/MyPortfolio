import BaseLayout from "@/layouts/BaseLayout"
import VantaBackground from "@/components/animation/VantaBackground"
import { Download } from 'lucide-react'

const ProjectsPage = () => {
    return (
        <BaseLayout>
            <VantaBackground className="w-full min-h-screen h-auto">
                <div className="text-white text-center p-10">
                    <h1 className="text-4xl font-bold mb-4">Projects</h1>
                    <p className="text-xl">Here are some of my projects. More coming soon!</p>
                    
                </div>
            </VantaBackground>
        </BaseLayout>
    );
};

export default ProjectsPage;
