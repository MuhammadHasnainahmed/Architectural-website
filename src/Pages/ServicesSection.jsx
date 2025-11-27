import React from "react";
import Servicedetails from "../Component/Servicedetails";
import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white"
    >
      {/* SECTION HEADER */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Our <span className="text-orange-500">Services</span>
        </h1>

        <div className="flex justify-center">
          <div className="h-1 w-24 bg-orange-500 rounded-full mb-6"></div>
        </div>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Delivering premium façade systems, commercial fit-outs and expert
          construction management across Western Australia.
        </p>
      </div>

      {/* CARD WRAPPER WITH NICE SPACING */}
      <div className="max-w-7xl mx-auto">
        <Servicedetails />
      </div>

      {/* VIEW MORE BUTTON */}
      <div className="text-center mt-16">
        <Link to="/services">
          <button className="px-10 py-4 bg-orange-600 hover:bg-orange-700 transition-all rounded-xl font-semibold text-lg shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40">
            View More Details
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ServicesSection;
