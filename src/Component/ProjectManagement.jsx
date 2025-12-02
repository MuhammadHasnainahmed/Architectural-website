import React from "react";
import { CheckCircle } from "lucide-react";

function ProjectManagement() {
  const points = [
    "End-to-end project planning and coordination",
    "Site supervision and safety compliance",
    "Subcontractor and resource management",
    "Procurement support and logistics",
    "Problem-solving for site constraints",
    "Quality assurance across all works",
  ];

  return (
    <section className="max-w-6xl mx-auto my-20 p-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project &{" "}
            <span className="text-orange-600">Construction Management</span>
          </h2>

          <p className="text-gray-700 text-lg mb-4">
            With a hands-on management style and a strong focus on quality and
            efficiency, we support clients through every phase of construction.
            We work closely with site teams, trades and stakeholders to ensure
            each project is delivered on time, on budget and to the highest
            standard.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Our experience in scheduling, resource management and on-site
            coordination enables us to anticipate challenges early and implement
            practical, cost-effective solutions. From initial planning to final
            completion, we maintain a safe, productive and transparent workflow.
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
            src="/built (34).jpeg"
            alt="Project Management"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectManagement;
