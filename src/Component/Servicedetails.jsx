import React from 'react'
import { FaTools, FaClipboardCheck, FaBuilding, FaHardHat } from "react-icons/fa";

function Servicedetails() {
    const services = [
        {
          icon: <FaTools className="text-orange-500 text-5xl mb-4" />,
          title: "Construction Support",
          desc: "Expert assistance at all stages of construction including site preparation, structural tasks and finishing works. Enhances workflow, safety and overall project efficiency.",
        },
        {
          icon: <FaClipboardCheck className="text-orange-500 text-5xl mb-4" />,
          title: "Project & Construction Management",
          desc: "Hands-on site leadership focused on planning, scheduling, resource allocation and problem-solving to ensure timely and high-quality project delivery.",
        },
        {
          icon: <FaBuilding className="text-orange-500 text-5xl mb-4" />,
          title: "External Façade Solutions & Fire-Rated Recladding",
          desc: "Specialist in compliant façade systems including aluminium panels, CFC, and fire-rated recladding — ensuring durability, safety and architectural excellence.",
        },
        {
          icon: <FaHardHat className="text-orange-500 text-5xl mb-4" />,
          title: "Commercial Interior Fit-outs & Maintenance",
          desc: "Precision interior fit-outs for ceilings, walls and internal upgrades across commercial, public and private environments including offices, retail and hospitals.",
        },
      ];
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 text-center border border-gray-700"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
  )
}

export default Servicedetails