import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      title: "20+ Years Experience",
      desc: "We bring decades of skilled construction expertise to every project.",
      icon: <CheckCircle className="w-10 h-10 text-orange-500" />, 
    },
    {
      title: "Fully Certified Team",
      desc: "Our team follows strict safety and quality guidelines.",
      icon: <CheckCircle className="w-10 h-10 text-orange-500" />, 
    },
    {
      title: "Zero Disruption",
      desc: "We work safely inside active environments like hospitals and corporate buildings.",
      icon: <CheckCircle className="w-10 h-10 text-orange-500" />, 
    },
  ];

  return (
    <section className="w-full py-20 bg-[#0C1321] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-orange-500">Why</span> Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white text-[#0C1321] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mt-4 mb-2 text-orange-500">{item.title}</h3>
              <p className="text-base opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
