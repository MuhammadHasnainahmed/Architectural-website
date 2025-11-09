import React from "react";
import { FaHammer, FaBuilding, FaPencilRuler, FaHome } from "react-icons/fa";

function ServicesSection() {
  const services = [
    {
      icon: <FaHammer className="text-orange-500 text-5xl mb-4" />,
      title: "Construction",
      desc: "We provide strong and reliable construction services for commercial and residential projects.",
    },
    {
      icon: <FaBuilding className="text-orange-500 text-5xl mb-4" />,
      title: "Architecture Design",
      desc: "Our expert architects deliver modern and innovative designs for all types of buildings.",
    },
    {
      icon: <FaPencilRuler className="text-orange-500 text-5xl mb-4" />,
      title: "Interior Design",
      desc: "We design stylish interiors that reflect your personality and meet your lifestyle needs.",
    },
    {
      icon: <FaHome className="text-orange-500 text-5xl mb-4" />,
      title: "Renovation",
      desc: "Transform your old spaces into new, modern, and functional living or work areas.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Our <span className="text-orange-500">Services</span>
              <hr  className=" w-[10%] mt-2 border-2 mx-auto border-orange-500 "/>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We offer a wide range of services to meet every type of construction and design need.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 text-center border border-gray-700"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
