import React from "react";
import { CheckCircle } from "lucide-react";

function CommercialFitouts() {
  const points = [
    "Steel stud framing and acoustic/thermal partitions",
    "Grid and flush plasterboard ceilings",
    "Feature ceilings, bulkheads and architectural details",
    "Office upgrades and tenancy modifications",
    "Internal cladding, linings and insulation",
    "Compliance-focused solutions for public buildings",
  ];

  return (
    <section className="max-w-6xl mx-auto my-20 p-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div>
          <img
            src="/built (11).JPG"
            alt="Interior Fitouts"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Commercial{" "}
            <span className="text-orange-600">Interior Fit-Outs</span>
          </h2>

          <p className="text-gray-700 text-lg mb-4">
            We deliver high-precision interior fit-outs for commercial, public
            and private sector environments, including offices, retail,
            education, healthcare, industrial and government facilities.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Our team works efficiently alongside other trades to ensure
            streamlined project delivery while maintaining exceptional
            workmanship. From structural framing to detailed finishes, we
            provide solutions that improve functionality, presentation and
            durability in high-use spaces.
          </p>

          <ul className="space-y-3">
            {points.map((item, index) => (
              <li key={index} className="flex gap-2 text-gray-800">
                <CheckCircle className="text-orange-500 mt-1" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CommercialFitouts;
