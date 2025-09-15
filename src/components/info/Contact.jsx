import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="text-white text-center p-10 w-[1200px] text-center mx-auto bg-gray-950/75 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <div className="flex flex-row items-center justify-center gap-20">
                <Link>
                    <Github className="mx-auto mb-4" size={48} />
                    <p className="text-xl">GitHub</p>
                </Link>
                <Link>
                    <Youtube className="mx-auto mb-4" size={48} />
                    <p className="text-xl">YouTube</p>
                </Link>
                <Link>
                    <Linkedin className="mx-auto mb-4" size={48} />
                    <p className="text-xl">LinkedIn</p>
                </Link>
                <Link>
                    <Mail className="mx-auto mb-4" size={48} />
                    <p className="text-xl">Email</p>
                </Link>
            </div>
        </div>
    )
}

export default Contact;