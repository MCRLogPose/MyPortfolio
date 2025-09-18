import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

let github_link = "https://github.com/MCRLogPose"
let youtube_link = "https://www.youtube.com/@Dev.Fish-MCR"
let linkedin_link = "https://www.linkedin.com/in/edwin-manuel-cruz-rivera/"
let email_link = "mailto:cruzriveraedwinmanuel@gmail.com"

const Contact = () => {
    return (
        <div className="text-white text-center p-6 sm:p-10 w-full max-w-[1200px] mx-auto bg-gray-950/75 rounded-lg shadow-lg">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">Contact Me</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
                <Link to={github_link} className="flex flex-col items-center hover:text-blue-400">
                    <Github className="mx-auto mb-4" size={48} />
                    <p className="text-xl">GitHub</p>
                </Link>
                <Link to={youtube_link} className="flex flex-col items-center hover:text-blue-400">
                    <Youtube className="mx-auto mb-4" size={48} />
                    <p className="text-xl">YouTube</p>
                </Link>
                <Link to={linkedin_link} className="flex flex-col items-center hover:text-blue-400">
                    <Linkedin className="mx-auto mb-4" size={48} />
                    <p className="text-xl">LinkedIn</p>
                </Link>
                <Link to={email_link} className="flex flex-col items-center hover:text-blue-400">
                    <Mail className="mx-auto mb-4" size={48} />
                    <p className="text-xl">Email</p>
                </Link>
            </div>
        </div>
    )
}

export default Contact;