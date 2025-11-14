import React from "react";

function Herosection() {
  return (
    <>
      <section id="home">
        <div
          className="relative w-full h-[90vh] bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-background.JPG')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Building With Precision, <span className="text-orange-500">Delivering With Integrity</span>
            </h1>

            <p className="text-lg md:text-2xl mb-6 max-w-2xl">
              Providing top-tier façade systems, recladding, and commercial fit-outs
              across Western Australia with unmatched craftsmanship.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
