import React from "react";
import Servicedetails from "../Component/Servicedetails";
import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <hr className="w-16 mx-auto border-2 border-orange-500 mb-6" />
        <p className="text-gray-400 max-w-2xl mx-auto">
          We deliver professional construction, façade and interior fit-out
          solutions with precision, quality and innovation.
        </p>
      </div>

  
      <Servicedetails />

      <Link to="/services">
      <div className="text-center mt-10">
        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg font-semibold">
          View More Details
        </button>
      </div>
      </Link>
    </section>
  );
}

export default ServicesSection;
