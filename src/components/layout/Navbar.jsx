import Logo from '/fish.png';
import { Link } from 'react-router-dom';

const about_me = '/about';
const contact_me = '/contact';
const projects_me = '/projects';

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 bg-gray-900 shadow-md w-full border-b-2 border-blue-500 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link to={'/'}>
              <img
                className="h-10 sm:h-14 md:h-20 w-auto"
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden sm:flex items-center justify-between h-full gap-6 sm:gap-10 md:gap-14 underline decoration-blue-500">
            <Link
              to={about_me}
              className="text-white text-base sm:text-lg md:text-2xl hover:text-blue-400 font-medium"
            >
              About
            </Link>
            <Link
              to={contact_me}
              className="text-white text-base sm:text-lg md:text-2xl hover:text-blue-400 font-medium"
            >
              Contact
            </Link>
            <Link
              to={projects_me}
              className="text-white text-base sm:text-lg md:text-2xl hover:text-blue-400 font-medium"
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