import React, { useEffect } from "react";
import Majorclient from "../Component/Majorclient";

function Aboutpage() {
 
    useEffect(() => {
       window.scrollTo({
        top:0,
        behavior:"smooth"
       })
    }, []);
    

  return (
    <div className="">
   
      <section className="relative bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-orange-500">Dingo Built</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            We are a Perth-based building company specialising in façade systems,
            interior fit-outs, construction support, and project management.
            Backed with 20+ years of experience, we deliver precise and
            non-disruptive project execution.
          </p>
        </div>


      </section>

     
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dingo Built delivers high-quality cladding installation, interior
            fit-outs and construction services, providing reliable support to
            builders and clients across Western Australia.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a commitment to safety, innovation and quality, our team works
            in live environments while maintaining minimal disruption and
            maximum efficiency.
          </p>
        </div>

        <img
          src="/aboutimage.jpg"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
          alt="Dingo Built Project"
        />
      </section>

  
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                20+ Years Experience
              </h3>
              <p className="text-gray-600">
                We bring decades of skilled construction expertise to every
                project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Fully Certified Team
              </h3>
              <p className="text-gray-600">
                Our team follows strict safety and quality guidelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Zero Disruption
              </h3>
              <p className="text-gray-600">
                We work safely inside active environments like hospitals and
                corporate buildings.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <div className="my-20">
        <Majorclient />
      </div>
    </div>
  );
}

export default Aboutpage;
