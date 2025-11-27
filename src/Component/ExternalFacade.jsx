import React from "react";
import { CheckCircle } from "lucide-react";

function ExternalFacade() {
  const points = [
    "Fire-compliant cladding systems and remediation",
    "Solid aluminium and non-combustible panels",
    "CFC cladding, batten systems and architectural linings",
    "Complete façade replacement and rectification",
    "Custom solutions for complex commercial structures",
  ];

  return (
    <section className="max-w-6xl mx-auto my-20 p-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            External <span className="text-orange-600">Façade Solutions</span>
          </h2>

          <p className="text-gray-700 text-lg mb-4">
            We deliver architecturally refined and fully compliant external
            façade systems for commercial and large-scale projects across
            Western Australia.
          </p>

          <p className="text-gray-700 text-lg mb-4">
            Our team provides complete façade solutions using high-quality
            materials including solid aluminium panels, CFC, NATA-tested
            fire-rated cladding and engineered fixings to ensure long-term
            performance and safety.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Whether upgrading existing façades or installing new systems, we
            manage every stage—from preparation and framing through to
            installation and finishing. Our façade works are designed to meet
            strict Australian Standards while achieving a clean, modern
            aesthetic that enhances structural integrity, weather resistance and
            overall building value.
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

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/built (24).JPG"
            alt="Façade Work"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ExternalFacade;
