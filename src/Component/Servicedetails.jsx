import React from 'react'
import { FaTools, FaClipboardCheck, FaBuilding, FaHardHat } from "react-icons/fa";

function Servicedetails() {
  const services = [

    {
      icon: <FaClipboardCheck className="text-orange-500 text-5xl mb-4" />,
      title: "Facade ",
      desc: "We specialise in solid aluminium panels, CFC and many other types of cladding of facade systems Maintenance-maintain building facade and internal areas of small or large scale buildings.",
    },
    {
      icon: <FaBuilding className="text-orange-500 text-5xl mb-4" />,
      title: "Reclads",
      desc: "Fire rating reclad (upgrading or replacing the external cladding of a building to improve its fire resistance and compliance with safety regulations.",
    },
    {
      icon: <FaHardHat className="text-orange-500 text-5xl mb-4" />,
      title: "Commercial Interior Fit-outs",
      desc: "internal fitouts comprising of ceiling and wall packages e.g starbucks, hungry jacks, supermarkets, schools, hospitals",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
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