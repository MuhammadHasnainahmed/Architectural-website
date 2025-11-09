import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Projectsection() {
  const projects = [
      {
        img: "/buil2.jpg",
        title: "Modern Minimalist House",
        date: "May 2018",
      },
    {
      img: "/buil1.webp",
      title: "Xiami Office Building",
      date: "July 2018",
    },
    {
        img: "/buil3.jpg",
        title: "Wooden House",
        date: "May 2018",
    },
    {
      img: "/buil4.jpg",
      title: "Prototype Building",
      date: "January 2018",
    },
   
  ];

  return (
   <section id="projects" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Projects
              <hr  className=" w-[10%] mt-2 border-2 border-orange-500 "/>
          </h2>
        </div>

       
        <div className="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-8 cursor-pointer">
          {projects.map((project, index) => (
            <div key={index} className="relative break-inside-avoid">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto rounded-md shadow-md object-cover hover:scale-105 transition-all duration-300"
              />
           
              <div className="absolute flex justify-between items-center bottom-0 left-0 right-0 bg-white px-5 py-3 shadow-md">
                <div>

                <h3 className="text-base font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.date}</p>
                </div>
                <div>

                <FaArrowRight className="text-orange-500"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projectsection;
