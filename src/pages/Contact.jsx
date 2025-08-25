import BaseLayout from "@/layouts/BaseLayout"
import VantaBackground from "@/components/animation/VantaBackground"
import { Download } from 'lucide-react'

const ContactPage = () => {
    return(
        <BaseLayout>
            <VantaBackground className="w-full min-h-screen h-auto">
                <div className="text-white text-center p-10">
                    <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                    <p className="text-xl">Feel free to reach out to me via email at</p>
                    <p className="text-xl">Feel free to reach out to me via email at</p>
                </div>
            </VantaBackground>
        </BaseLayout>
    )
}

export default ContactPage