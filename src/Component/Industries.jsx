import React from 'react'

function Industries() {
  return (
       <div className="my-12 max-w-6xl mx-auto mt-24 px-4">
  <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
    Industries We Serve
  </h2>

  <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
    Dingo Built partners with clients across diverse industries, delivering exceptional solutions tailored specifically to each sector’s unique requirements. Our proven track record ensures consistent quality and reliability, even in challenging operational environments.
  </p>

  <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      "Commercial Construction",
      "Government & Civic Projects",
      "Healthcare & Hospitals",
      "Retail & Hospitality Fit-Outs",
      "Education & Schools",
      "Transport & Infrastructure",
    ].map((industry, i) => (
      <li
        key={i}
        className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex items-center justify-center text-gray-800 font-semibold text-lg text-center"
      >
        <span className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full font-medium text-sm shadow">
          {i + 1}
        </span>
        {industry}
      </li>
    ))}
  </ul>
</div>
  )
}

export default Industries