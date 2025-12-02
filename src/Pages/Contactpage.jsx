import { User } from "lucide-react";
import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function ContactPage() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (

    <>
      <section style={{ backgroundImage: "url(/contact-banner.jpg)" }}
        className="flex justify-center items-center relative bg-black text-white py-24 bg-center bg-cover">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-50 ">
          <h1 className=" text-4xl md:text-6xl font-bold mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h1>
        </div>


      </section><section className="container mx-auto px-6 py-20">

        {/* 🔥 HERO SECTION */}


        <h3 className="text-center  mt-12 text-3xl font-bold text-orange-600 mb-8">
          Contact Information
        </h3>

        {/* 🔥 MAIN CONTENT (Info + Form) */}
        <div className="mt-12 flex flex-col md:flex-row gap-12 justify-center items-centergap-12">

          {/* LEFT — CONTACT INFO */}
          <div className="w-[600px]  bg-white rounded-2xl p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">


            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-orange-600 p-3 rounded-lg shadow-md">
                  <User className="text-white text-2xl" />
                </div>
                <p className="text-lg space-x-2 text-gray-700 leading-relaxed">
                  Code Aitken
                  <span className="ml-2 font-semibold">(Director)</span>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-3 rounded-lg shadow-md">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <a href="tel:+61457209649" className="font-semibold hover:text-orange-600">
                    +61 457 209 649
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
                    cade@dingobuilt.com
                  </a>
                </p>
              </div>

            </div>
          </div>

          <div className="w-[600px] bg-white rounded-2xl p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-orange-600 p-3 rounded-lg shadow-md">
                  <User className="text-white text-2xl" />
                </div>
                <p className="text-lg space-x-2 text-gray-700 leading-relaxed">
                  Elyse Aitken
                  <span className="ml-2 font-semibold">(Business Manager)</span>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-3 rounded-lg shadow-md">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <a href="tel:+61467591142" className="font-semibold hover:text-orange-600">
                    +61 467 591 142
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


        </div>
      </section></>
  );
}

export default ContactPage;
