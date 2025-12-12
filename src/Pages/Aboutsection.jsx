import React from "react";
import { Link } from "react-router-dom";

function Aboutsection() {
  return (
    <section id="about" className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">

      <div className="md:w-1/2">
        <img
          src="/aboutimage.jpg"
          alt="About Dingo Built"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>


      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide mb-6">
          About <span className="text-orange-500">Dingo Built</span>
          <hr className="w-[20%] mt-2 border-2 border-orange-500" />
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Dingo Built provides top-tier external façade solutions and interior fit-out services for commercial construction projects across Western Australia.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          With over 20 years of hands-on experience, our director Cade Aitken leads a highly skilled team to deliver exceptional craftsmanship, project management, and innovative design.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          We specialise in façade systems, reclads, commercial interior fit-outs, and maintenance services — always ensuring quality, reliability, and client satisfaction.
        </p>


        <div>
          <p className="font-signature text-lg mb-1">Cade Aitken</p>
          <p className="font-semibold tracking-wide text-gray-700">Director, Dingo Built</p>
        </div>
        <Link to="/about">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl mt-12 font-semibold transition-all duration-300  w-[150px]">Learn More</button>
        </Link>
      </div>
    </section>
  );
}

export default Aboutsection;
