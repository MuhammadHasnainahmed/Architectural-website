import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  const navItems = [
    { label: "Home", id: "home", path: "/" },
    { label: "About", id: "about", path: "/about" },
    { label: "Services", id: "services", path: "/services" },
    { label: "Gallery", id: "gallery", path: "/gallery" },
    { label: "Contact", id: "contact", path: "/contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/">
          <img
            src="/dingobuiltlogo.jpg"
            alt="DingoBuilt Logo"
            className="h-20 w-auto rounded-md"
            />
            </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-gray-800 font-semibold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:text-orange-500 transition-all duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.path === "/" && location.pathname === "/" ? (
                <span onClick={() => scrollToSection(item.id)}>{item.label}</span>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-800 font-semibold">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300"
              >
                {item.path === "/" && location.pathname === "/" ? (
                  <span onClick={() => scrollToSection(item.id)}>{item.label}</span>
                ) : (
                  <Link to={item.path} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search..."
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
