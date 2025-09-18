import BaseLayout from "@/layouts/BaseLayout"
import VantaBackground from "@/components/animation/VantaBackground"
import About from "@/components/info/About"

const AboutPage = () => {
    return (
        <BaseLayout>
            <VantaBackground className="w-full min-h-screen h-auto">
                <About />
            </VantaBackground>
        </BaseLayout>

    )
}

export default AboutPage;