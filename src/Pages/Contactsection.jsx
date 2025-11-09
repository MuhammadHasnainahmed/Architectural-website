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

       <div className="md:w-1/2 flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none h-32"
          ></textarea>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Send Message
          </button>
        </div>


      </div>
    </section>
  );
}

export default Contactsection;
