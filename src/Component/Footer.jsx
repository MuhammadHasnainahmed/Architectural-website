import React from "react";

function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/dingobuiltlogo.jpg"
            alt="DingoBuilt Logo"
            className="h-16 w-auto mb-4 rounded-md"
          />
          <h2 className="text-2xl font-bold text-black">DingoBuilt</h2>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-black mb-3">
            About Us
          </h1>
          <p className="text-white leading-relaxed">
            We specialize in modern architecture and innovative building
            solutions. Our goal is to create spaces that inspire and stand the
            test of time.
          </p>
        </div>

    
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-black mb-3">
            Contact Us
          </h1>

          <p className="text-white">
            
            <a
              href="https://www.google.com/maps?q=123+Main+Street+Karachi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              123 Main Street, Karachi
            </a>
          </p>

          <p className="text-white">
            
            <a
              href="tel:+921234567890"
              className="hover:text-black transition-colors"
            >
              (021) 456-7890
            </a>
          </p>

          <p className="text-white">
            
            <a
              href="mailto:info@dingobuilt.com"
              className="hover:text-black transition-colors"
            >
              info@dingobuilt.com
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
