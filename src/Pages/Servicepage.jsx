import React, { useEffect } from "react";
import CaseStudyAccordion from "../Component/CaseStudyAccordion";
import Servicedetails from "../Component/Servicedetails";
import Industries from "../Component/Industries";
import Majorclient from "../Component/Majorclient";

function Servicepage() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <section className="min-h-screen bg-gray-50 ">


      <div className="relative w-full h-64 md:h-96 mb-12 flex items-center justify-center  overflow-hidden">
        <img
          src="/hero-background.JPG"
          alt="Services Background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-linear-to-b from-orange-400/60 via-orange-300/40 to-transparent"></div>
        <div className="relative text-center px-4">
          <h2 className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Services We Offer
          </h2>
          <p className="text-lg md:text-2xl text-white drop-shadow-md">
            We offer a wide range of services to meet your construction needs.
          </p>
        </div>
      </div>


      <Servicedetails />


      <div className="max-w-6xl mx-auto mt-24 p-10 rounded-3xl bg-linear-to-r from-orange-50 to-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ongoing Project: <span className="text-orange-600">Fiona Stanley Hospital</span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
          Dingo Built is delivering fire-rated façade works in a live hospital environment,
          showcasing precise, adaptable, and non-disruptive project execution.
        </p>

        {/* Optional: Highlight badges */}
        <div className="mt-6 flex flex-wrap gap-4">
          <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-medium text-sm">Fire-Rated Façade</span>
          <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-medium text-sm">Live Environment</span>
          <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-medium text-sm">Precision Execution</span>
        </div>
      </div>



      <Industries />



      {/* Case Study */}
      <CaseStudyAccordion />

    </section>
  );
}

export default Servicepage;
