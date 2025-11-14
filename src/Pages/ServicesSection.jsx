import React from "react";
import { FaFireAlt, FaBuilding, FaTools, FaRegLifeRing } from "react-icons/fa";

function ServicesSection() {
  const services = [
    {
      icon: <FaFireAlt className="text-orange-500 text-5xl mb-4" />,
      title: "Fire Rating Reclad",
      desc: "Upgrade or replace external cladding to improve fire resistance and meet safety regulations. Ensuring safe and compliant façades for commercial buildings.",
    },
    {
      icon: <FaBuilding className="text-orange-500 text-5xl mb-4" />,
      title: "Facade Systems",
      desc: "Supply and install high-quality façade systems including aluminium panels, CFC, and other materials for modern and durable exteriors.",
    },
    {
      icon: <FaTools className="text-orange-500 text-5xl mb-4" />,
      title: "Internal Fitouts",
      desc: "Complete ceiling and wall packages for offices, retail, and commercial spaces such as Starbucks, schools, hospitals, and supermarkets.",
    },
    {
      icon: <FaRegLifeRing className="text-orange-500 text-5xl mb-4" />,
      title: "Maintenance Services",
      desc: "Regular maintenance of building façades and interiors to ensure longevity and a pristine appearance for projects of all sizes.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <hr className="w-16 mx-auto border-2 border-orange-500 mb-6" />
        <p className="text-gray-400 max-w-2xl mx-auto">
          We provide a wide range of specialized services with precision, quality, and innovation in every project.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 text-center border border-gray-700"
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
