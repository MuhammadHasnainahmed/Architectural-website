import React from "react";
import { FaTools, FaBuilding, FaProjectDiagram } from "react-icons/fa";

function Servicedetails() {
  const services = [
    {
      title: "External Façade Solutions",
      icon: <FaBuilding className="text-orange-600 text-6xl drop-shadow-lg" />,
      desc:
        "Premium, compliant façade systems designed for modern commercial developments across Western Australia.",
      points: [
        "Fire-rated cladding & full remediation",
        "Solid aluminium & non-combustible panels",
        "CFC cladding, battens & decorative linings",
        "Complete façade replacement solutions",
        "Custom façade engineering for large builds",
      ],
    },
    {
      title: "Commercial Interior Fit-Outs",
      icon: <FaTools className="text-orange-600 text-6xl drop-shadow-lg" />,
      desc:
        "High-precision interior fit-outs for retail, corporate, government, education and healthcare projects.",
      points: [
        "Steel stud framing & partitioning",
        "Grid & flush ceilings",
        "Architectural feature ceilings & bulkheads",
        "Office upgrades & tenancy works",
        "Internal linings, insulation & wall systems",
      ],
    },
    {
      title: "Project & Construction Management",
      icon: <FaProjectDiagram className="text-orange-600 text-6xl drop-shadow-lg" />,
      desc:
        "Complete project supervision ensuring premium quality, safety compliance, and on-time delivery.",
      points: [
        "End-to-end project coordination",
        "Site supervision & WHS compliance",
        "Scheduling & contractor management",
        "Procurement & logistics support",
        "Quality assurance & reporting",
      ],
    },
  ];

  return (
    <section className="py-24 ">
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

              <ul className="space-y-3">
                {service.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                    <span className="text-orange-600 text-xl">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicedetails;
