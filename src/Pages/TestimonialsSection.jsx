import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, ABC Corp",
      feedback:
        "DingoBuilt delivered our project on time with outstanding quality. Highly recommend their services!",
      avatar: "/avator2.png", 
    },
    {
      name: "Sarah Khan",
      role: "Interior Designer",
      feedback:
        "Amazing work! Their team transformed our space beautifully. Professional and creative.",
      avatar: "/avator1.png",
    },
    {
      name: "Ali Ahmed",
      role: "Homeowner",
      feedback:
        "From design to construction, everything was perfect. Excellent communication and execution.",
      avatar: "/avator3.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          What Our <span className="text-orange-500">Clients Say</span>
              <hr  className=" w-[15%] mt-2 border-2 mx-auto border-orange-500 "/>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hear from some of our satisfied clients who trusted us for their
          building projects.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6  ">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-md hover:text-black hover:bg-orange-500 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testi.avatar}
                alt={testi.name}
                className="w-14 h-14 rounded-full border-2 border-orange-500 hover: mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{testi.name}</h3>
                <p className="text-sm ">{testi.role}</p>
              </div>
            </div>
            <div className="">
              <FaQuoteLeft className="  mb-2" />
              <p className="text-sm">{testi.feedback}</p>
            </div>
            <div className="mt-4 flex">
              {[...Array(5)].map((star, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
