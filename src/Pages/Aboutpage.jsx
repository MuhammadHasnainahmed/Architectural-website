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

      <section style={{ backgroundImage: "url(/contact-banner.jpg)" }} className="relative bg-black text-white py-24">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-50 max-w-6xl mx-auto px-6">
          <h1 className=" text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-orange-500">Dingo Built</span>
          </h1>
          <p className="text-white max-w-6xl text-base leading-relaxed">
            Dingo Built was founded in Perth with a simple goal: deliver construction projects with the kind of precision, consistency and care that clients can rely on. Specialising in façade systems, interior fit-outs, construction support and project management, we bring over two decades of hands-on experience to every project.
            Our team understands the realities of working within live commercial and industrial environments. That’s why our approach centres on clear communication, thorough planning and non-disruptive execution. Whether upgrading a building’s exterior or transforming an interior space, we ensure the job is done seamlessly — without slowing down your operations.
          </p>
        </div>


      </section>


      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are a team of cladding specialists, fit-out professionals and construction experts committed to delivering high-quality workmanship across Western Australia. We support builders, contractors and clients with reliable labour, technical capability and project leadership.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Safety and innovation sit at the core of everything we do. Our team is trained to work efficiently in active environments, maintaining strict safety standards while minimising downtime for our clients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Dingo Built, we believe in doing things properly the first time — combining professional integrity, practical solutions and a dedication to quality outcomes that stand the test of time          </p>
        </div>

        <img
          src="/contact-banner.jpg"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
          alt="Dingo Built Project"
        />
      </section>


      <WhyChooseUs />



    </div>
  );
}

export default Aboutpage;
