import Logo from '/fish.png';
import { Link } from 'react-router-dom';

const about_me = '/about';
const contact_me = '/contact';
const projects_me = '/projects';

const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 bg-gray-900 shadow-md w-full border-b-2 border-blue-500 z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-around h-full">
                    <div className="flex items-center h-full">
                        <Link to={'/'}>
                            <img
                                className="h-[80px] w-auto"
                                src={Logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-between h-full gap-[60px] underline decoration-blue-500">
                        <Link
                            to={about_me}
                            className="text-white text-2xl hover:text-blue-400 font-medium"
                        >
                            About
                        </Link>
                        <Link
                            to={contact_me}
                            className="text-white text-2xl hover:text-blue-400 font-medium"
                        >
                            Contact
                        </Link>
                        <Link
                            to={projects_me}
                            className="text-white text-2xl hover:text-blue-400 font-medium"
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
