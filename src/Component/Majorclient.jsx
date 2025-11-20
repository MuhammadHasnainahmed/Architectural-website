import React from 'react'

function Majorclient() {
  return (
<div className="max-w-6xl mx-auto mt-24 px-4">
  <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
    Major Clients
  </h2>
  <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
    We have partnered with leading organizations across industries, delivering reliable and high-quality solutions.
  </p>

  <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { name: "Suncorp Bank", logo: "/hero-background.JPG" },
      { name: "Mazda", logo: "/logos/mazda.png" },
      { name: "Dan Murphy’s", logo: "/logos/danmurphys.png" },
      { name: "Kilmore Group", logo: "/logos/kilmore.png" },
      { name: "Multiplex", logo: "/logos/multiplex.png" },
      { name: "Georgiou", logo: "/logos/georgiou.png" },
      { name: "Metronet", logo: "/logos/metronet.png" },
      { name: "Department of Finance", logo: "/logos/finance.png" },
    ].map((client, i) => (
      <li
        key={i}
        className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 flex flex-col items-center justify-center overflow-hidden group"
      >
        <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <img
            src={client.logo}
            alt={client.name}
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="text-white  font-semibold text-lg text-center bg-orange-500 px-3 py-1 rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
  {client.name}
</div>

        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity"></div>
      </li>
    ))}
  </ul>
</div>


  )
}

export default Majorclient