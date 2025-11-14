import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Projectsection() {
  const projects = [
    { img: "/buil4.JPG", title: "Modern Minimalist House", date: "May 2018" },
    { img: "/buil1.JPG", title: "Xiami Office Building", date: "July 2018" },
    { img: "/buil3.JPG", title: "Wooden House", date: "May 2018" },
    { img: "/buil2.JPG", title: "Prototype Building", date: "January 2018" },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 inline-block">
            Projects
            <hr className="w-16 mt-2 border-2 border-orange-500" />
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-5 py-3 flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
                <FaArrowRight className="text-orange-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projectsection;
