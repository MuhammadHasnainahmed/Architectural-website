import { useEffect } from "react";
import WhyChooseUs from "../Component/WhyChooseUs";

function Aboutpage() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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


      <WhyChooseUs />



    </div>
  );
}

export default Aboutpage;
