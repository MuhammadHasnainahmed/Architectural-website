import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Contactinput from "../Component/Contactinput";
import Majorclient from "../Component/Majorclient";

function ContactPage() {
  const address = "Perth, WA, Western Australia";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <section className="container mx-auto px-6 py-20">

      {/* Hero Section */}
      <div className="relative w-full h-40 mb-12 flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src="/hero-background.JPG"
          alt="Contact Background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-orange-300/40"></div>
        <h2 className="relative text-3xl md:text-4xl font-bold text-white text-center">
          Contact Us
        </h2>
      </div>

      {/* Map */}
      <div className="my-12 w-full h-[350px] rounded-xl overflow-hidden shadow-lg mt-8">
        <iframe
          src={mapUrl}
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info + Form */}
      <div className="flex flex-col md:flex-row gap-12">

        {/* Left: Contact Information */}
        <div className="md:w-1/2 bg-orange-600 text-white p-8 rounded-lg flex flex-col gap-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="flex items-center gap-4">
            <IoLocationSharp className="text-2xl text-white" />
            <p>Perth, WA, Western Australia</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-2xl text-white" />
            <p>
              <a href="tel:+61457209649" className="underline hover:text-orange-200">
                0457 209 649
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-2xl text-white" />
            <p>
              <a href="tel:+614366234876" className="underline hover:text-orange-200">
                43 662 348 763
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-white" />
            <p>
              <a
                href="mailto:admin@dingobuilt.com"
                className="underline hover:text-orange-200"
              >
                admin@dingobuilt.com
              </a>
            </p>
          </div>

        </div>

        {/* Right: Contact Form */}
        <Contactinput />

      </div>
    </section>
  );
}

export default ContactPage;
