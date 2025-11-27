import React from "react";

function Contactinput() {
  return (
    <form className="w-full md:w-full flex flex-col gap-6">
      <input
        type="text"
        placeholder="Your Name"
        required
        className="px-5 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30 backdrop-blur-md transition"
      />
      <input
        type="email"
        placeholder="Your Email"
        required
        className="px-5 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30 backdrop-blur-md transition"
      />
      <textarea
        placeholder="Your Message"
        required
        className="px-5 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30 backdrop-blur-md transition resize-none h-36"
      ></textarea>
      <button className="bg-white/30 hover:bg-white/50 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        Send Message
      </button>
    </form>
  );
}

export default Contactinput;
