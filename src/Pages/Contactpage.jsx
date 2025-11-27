import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Contactinput from "../Component/Contactinput";

function ContactPage() {
  const address = "Perth, WA, Western Australia";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="container mx-auto px-6 py-20">

      {/* 🔥 HERO SECTION */}
      <div className="relative w-full h-52 md:h-64 flex items-center justify-center rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/hero-background.JPG"
          alt="Contact Background"
          className="absolute w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 to-black/50"></div>
        <h2 className="relative text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Contact Us
        </h2>
      </div>

      {/* 🔥 MAP */}
      <div className="my-16 w-full h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-orange-300/40">
        <iframe
          src={mapUrl}
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

      {/* 🔥 MAIN CONTENT (Info + Form) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT — CONTACT INFO */}
        <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
          <h3 className="text-3xl font-bold text-orange-600 mb-8">
            Contact Information
          </h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="bg-orange-600 p-3 rounded-lg shadow-md">
                <IoLocationSharp className="text-white text-2xl" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Perth, WA, Western Australia
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-600 p-3 rounded-lg shadow-md">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <a href="tel:+61457209649" className="font-semibold hover:text-orange-600">
                  +61 0457 209 649
                </a>
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-600 p-3 rounded-lg shadow-md">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <a
                  href="mailto:admin@dingobuilt.com"
                  className="font-semibold hover:text-orange-600"
                >
                  admin@dingobuilt.com
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <div className="rounded-2xl shadow-xl p-6 md:p-10 bg-orange-600 text-white">
          <Contactinput />
        </div>

      </div>
    </section>
  );
}

export default ContactPage;
