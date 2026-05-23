import React, { useState } from "react";
import { Link } from "react-router-dom";
import pwsoLogo from "./../assets/pwso-logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 bg-slate-100 shadow-lg fixed top-0 left-0 z-50">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[2000px] mx-auto flex items-center justify-between h-full px-5 md:px-10 lg:px-20">
        {/* LOGO */}
        <Link to="/" className="h-full w-32 flex items-center">
          <img
            src={pwsoLogo}
            alt="pwso logo"
            className="h-full object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 font-semibold text-base">
          <li>
            <Link
              className="hover:bg-blue-100 px-3 py-2 rounded-md transition"
              to="/about"
            >
              Our History
            </Link>
          </li>

          <li>
            <Link
              className="hover:bg-blue-100 px-3 py-2 rounded-md transition"
              to="/donors"
            >
              Donors
            </Link>
          </li>

          <li>
            <Link
              className="hover:bg-blue-100 px-3 py-2 rounded-md transition"
              to="/contact"
            >
              Contact us
            </Link>
          </li>

          <li>
            <Link
              className="hover:bg-blue-100 px-3 py-2 rounded-md transition"
              to="/project"
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* DONATE BUTTON (DESKTOP) */}
        <Link
          to="/donate"
          className="hidden md:block px-5 py-3 text-white bg-gradient-to-b from-blue-500 to-blue-600 rounded-md hover:opacity-90 transition"
        >
          Donate Now
        </Link>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute md:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-4 font-semibold text-lg shadow-lg z-50
        transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-4 hover:bg-sky-400 hover:text-white transition"
        >
          Our History
        </Link>

        <Link
          to="/donors"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-4 hover:bg-sky-400 hover:text-white transition"
        >
          Donors
        </Link>

        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-4 hover:bg-sky-400 hover:text-white transition"
        >
          Contact us
        </Link>

        <Link
          to="/project"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center py-4 hover:bg-sky-400 hover:text-white transition"
        >
          Projects
        </Link>

        <Link
          to="/donate"
          onClick={() => setIsMenuOpen(false)}
          className="mb-4 px-6 py-3 text-white bg-gradient-to-b from-blue-500 to-blue-600 rounded-md"
        >
          Donate Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
