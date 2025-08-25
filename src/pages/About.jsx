import BaseLayout from "@/layouts/BaseLayout"
import VantaBackground from "@/components/animation/VantaBackground"
import { Download } from 'lucide-react'

const AboutPage = () => {
    return (
        <BaseLayout>
            <VantaBackground className="w-full min-h-screen h-auto">
                <div className="text-white text-center p-10">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-xl">Hello! I'm Edwin Manuel Cruz Rivera, a passionate Software Engineer dedicated to crafting innovative solutions and building impactful applications. With a strong foundation in various programming languages and frameworks, I thrive on turning complex problems into elegant, efficient code. My journey in software development is driven by a relentless curiosity and a commitment to continuous learning. I believe in the power of technology to transform lives and am excited to contribute my skills to meaningful projects. Let's connect and
                        create something amazing together!</p>
                </div>
            </VantaBackground>
        </BaseLayout>

    )
}

export default AboutPage;