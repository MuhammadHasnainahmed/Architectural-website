import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-orange-600 w-full  text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img
              src="./footerLogo.png"
              alt="DingoBuilt Logo"
              className="w-[200px] h-[200px] mb-4 rounded-md"
            />
          </Link>

          {/* <h2 className="text-2xl font-bold text-black">DingoBuilt</h2> */}
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-black mb-3">About Us</h1>
          <p className="text-white leading-relaxed">
            DingoBuilt provides top-tier external facade solutions, commercial
            interior fit-outs, and renovation services across Western Australia.
            We focus on quality, precision, and delivering projects that exceed
            expectations.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-black mb-3">Contact Us</h1>

          <p className="text-white">
            <strong>Location: </strong> Perth, Western Australia (We service all
            WA)
          </p>

          <p className="text-white">
            <strong>Phone: </strong>
            <a
              href="tel:0457209649"
              className="hover:text-black transition-colors"
            >
             +61 0457 209 649
            </a>
          </p>

          <p className="text-white">
            <strong>Email: </strong>
            <a
              href="mailto:admin@dingobuilt.com"
              className="hover:text-black transition-colors"
            >
              admin@dingobuilt.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-4 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} DingoBuilt. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
