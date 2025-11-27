import React from "react";
import { FaTools, FaBuilding, FaProjectDiagram } from "react-icons/fa";

function Servicedetails() {
  const services = [
    {
      title: "External Façade Solutions",
      icon: <FaBuilding className="text-orange-600 text-6xl drop-shadow-lg" />,
      desc:
        "Premium, compliant façade systems designed for modern commercial developments across Western Australia.",
    },
    {
      title: "Commercial Interior Fit-Outs",
      icon: <FaTools className="text-orange-600 text-6xl drop-shadow-lg" />,
      desc:
        "We deliver high-precision interior fit-outs for commercial, public and private sector environments, including offices, retail, education, healthcare, industrial and government facilities.",
    },
    {
      title: "Project & Construction Management",
      icon: <FaProjectDiagram className="text-orange-600 text-6xl drop-shadow-lg" />,
      desc:
        "With a hands-on management style and a strong focus on quality and efficiency, we support clients through every phase of construction—ensuring projects are delivered on time, on budget, and to the highest standard.",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10 
              hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 
              hover:border-orange-500/50"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Servicedetails;
