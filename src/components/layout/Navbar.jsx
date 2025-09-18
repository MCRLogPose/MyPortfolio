import React, { useState } from 'react';
import Logo from '/fish.png';
import { Link } from 'react-router-dom';

const about_me = '/about';
const contact_me = '/contact';
const projects_me = '/projects';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Hamburger menu (mobile) */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links (desktop) */}
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col gap-4 mt-2 underline decoration-blue-500">
            <Link
              to={about_me}
              className="text-white text-lg hover:text-blue-400 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to={contact_me}
              className="text-white text-lg hover:text-blue-400 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to={projects_me}
              className="text-white text-lg hover:text-blue-400 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;