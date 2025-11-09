import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 👇 Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // mobile menu band kar do scroll ke baad
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-2 md:px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/dingobuiltlogo.jpg"
            alt="logo"
            className="h-16 w-auto rounded-md"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-semibold">
          {[
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="relative cursor-pointer text-gray-700 hover:text-orange-500 transition-all duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Search Box */}
        <div className="hidden md:relative md:block">
          <input
            type="text"
            placeholder="Where are you looking for?"
            className="bg-gray-100 rounded-full px-12 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-semibold">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300"
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Where are you looking for?"
              className="bg-gray-100 rounded-full px-12 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
