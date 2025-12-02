import React, { useEffect } from "react";
import CaseStudyAccordion from "../Component/CaseStudyAccordion";
import Servicedetails from "../Component/Servicedetails";
import Industries from "../Component/Industries";
import ExternalFacade from "../Component/ExternalFacade";
import CommercialFitouts from "../Component/CommercialFitouts";
import ProjectManagement from "../Component/ProjectManagement";

function Servicepage() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <section className="min-h-screen bg-gray-50 ">

     

      <div   className="relative w-full h-64 md:h-96 mb-12 flex items-center justify-center  overflow-hidden">
        <img
          src="/contact-banner.jpg"
          alt="Services Background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-linear-to-r from-black/60 /40 to-transparent"></div>
        <div className="relative text-center px-4 z-10">
          <h2 className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Services We <span className="text-orange-500">Offer</span>
          </h2>
          <p className=" text-lg md:text-2xl text-white drop-shadow-md">
            We offer a wide range of services to meet your construction needs.
          </p>
        </div>
      </div>

       <ExternalFacade />
      <CommercialFitouts />
      <ProjectManagement />
      <Industries />



 
    </section>
  );
}

export default Servicepage;
