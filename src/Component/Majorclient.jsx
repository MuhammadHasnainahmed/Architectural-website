import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Majorclient() {
  const clients = [
    { name: "Suncorp Bank", logo: "/d-logo.png" },
    { name: "Mazda", logo: "/d-logo.png" },
    { name: "Dan Murphy’s", logo: "/d-logo.png" },
    { name: "Kilmore Group", logo: "/d-logo.png" },
    { name: "Multiplex", logo: "/d-logo.png" },
    { name: "Georgiou", logo: "/d-logo.png" },
    { name: "Metronet", logo: "/d-logo.png" },
    { name: "Department of Finance", logo: "/d-logo.png" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Major Clients
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        We have partnered with leading organizations across industries,
        delivering reliable and high-quality solutions.
      </p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20} 
        slidesPerView={1} 
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 25 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 35 },
          1280: { slidesPerView: 6, spaceBetween: 40 },
        }}
      >
        {clients.map((client, i) => (
          <SwiperSlide key={i}>
            <div
              className="
                relative 
                bg-white/70 
                backdrop-blur-md
                border border-gray-200 
                p-6 sm:p-8 
                rounded-2xl 
                shadow-md 
                hover:shadow-xl 
                transition-all 
                duration-300 
                flex flex-col 
                items-center 
                justify-center 
                group
                hover:-translate-y-2
                cursor-pointer
              "
            >
              <img
                src={client.logo}
                alt={client.name}
                className="
                  h-16 sm:h-20 
                  w-auto 
                  object-contain 
                  mb-4 
                  transition-transform 
                  duration-300 
                  group-hover:scale-110
                "
              />
              <p
                className="
                  text-gray-800
                  font-semibold 
                  text-sm sm:text-lg 
                  text-center 
                  group-hover:text-orange-600 
                  transition-colors
                "
              >
                {client.name}
              </p>

              <div
                className="
                  absolute 
                  inset-0 
                  rounded-2xl 
                  bg-orange-500/5 
                  opacity-0 
                  group-hover:opacity-100 
                  transition
                "
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Majorclient;
