import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity">
          DEV<span className="text-blue-600">NIS</span>
        </Link>
        <div className="hidden md:flex items-center space-x-10 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <NavLink
              to={link.url}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600")}
              key={link.id}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            target="_blank"
            to="https://wa.me/6285722513519?text=Halo%20Devnis%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20layanan%20Anda."
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Mulai Konsultasi
          </Link>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} id="menu-toggle" className="md:hidden p-2 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div id="mobile-menu" className="bg-white border-b border-gray-100 px-6 py-8 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              to={link.url}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-blue-600") + " block text-lg font-semibold"}
              key={link.id}
            >
              {link.name}
            </NavLink>
          ))}

          <Link to="/contact" className="block w-50 text-lg text-center font-semibold bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
