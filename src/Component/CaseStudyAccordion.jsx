import React, { useState } from "react";

function CaseStudyAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Challenge",
      desc: "The recladding project was a six-storey occupied office building in Osborne Park. Mid-project, the original site manager abruptly left, creating significant operational challenges and requiring immediate intervention to ensure the project stayed on track."
    },
    {
      title: "Solution",
      desc: "The Dingo Built team quickly stepped in, seamlessly managing project execution. To minimise disruption for occupants, construction tasks involving noise-intensive activities were rescheduled outside standard business hours."
    },
    {
      title: "Outcome",
      desc: "The recladding was completed successfully, meeting the practical completion deadline and reinforcing Dingo Built’s reputation for reliability and excellence, securing ongoing collaboration with Kilmore Group."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-20 p-8 bg-white rounded-3xl shadow-lg border">
      <h2 className="text-4xl font-bold mb-8">
        Case Study: <span className="text-orange-600">Department of Finance Building Reclad</span>
      </h2>

      {items.map((item, i) => (
        <div key={i} className="border-b py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(i)}
          >
            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
            <span className="text-3xl font-bold text-orange-600">
              {openIndex === i ? "−" : "+"}
            </span>
          </div>

          {openIndex === i && (
            <p className="mt-3 text-gray-700 text-lg leading-relaxed">{item.desc}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CaseStudyAccordion;
