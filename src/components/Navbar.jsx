import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-white text-2xl font-bold">
          United  School
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            <li>
              <Link
                to="/"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded block"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/achievements"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded block"
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded block"
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded block"
              >
                About
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;