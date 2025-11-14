import React from 'react'

function Contactinput() {
  return (
   <form className="md:w-1/2 flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <textarea
            placeholder="Your Message"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none h-32"
          ></textarea>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Send Message
          </button>
        </form>

  )
}

export default Contactinput