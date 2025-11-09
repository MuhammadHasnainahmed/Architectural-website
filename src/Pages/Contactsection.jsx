import React from "react";

function Contactsection() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-6">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-orange-500 font-bold text-4xl md:text-5xl">
            GET IN TOUCH
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            We’d love to hear from you. Reach out for inquiries or project details.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
            Contact Us
          </button>
          <button className="bg-white border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 font-semibold px-6 py-3 rounded-full transition-all duration-300">
            Our Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contactsection;
