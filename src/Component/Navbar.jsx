import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Mobile menu close after scroll
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Testimonial", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/dingobuiltlogo.jpg"
            alt="logo"
            className="h-16 w-auto rounded-md"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="relative cursor-pointer hover:text-orange-500 transition-all duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </li>
          ))}
        </ul>

      

        {/* Mobile Hamburger */}
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
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
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
