import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Contactinput from "../Component/Contactinput";
import Majorclient from "../Component/Majorclient";

function ContactPage() {
  const address = "212 North Rodney Helena Montana 59601 Suite 107";

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

     <div className="my-12 w-full h-[350px] rounded-xl overflow-hidden shadow-lg mt-8">
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    
    
      <div className="flex flex-col md:flex-row gap-12">

        <div className="md:w-1/2 bg-orange-600 text-white p-8 rounded-lg flex flex-col gap-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="flex items-center gap-4">
            <IoLocationSharp className="text-2xl text-white" />
            <p>212 North Rodney Helena Montana 59601 Suite 107</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-2xl text-white" />
            <p>
              <a href="tel:+614572096482" className="underline hover:text-orange-200">
                +61 457 209 649
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-white" />
            <p>
              <a
                href="mailto:beatriceherbalista@gmail.com"
                className="underline hover:text-orange-200"
              >
                beatriceherbalista@gmail.com
              </a>
            </p>
          </div>
 
        </div>

        {/* Right Side: Contact Form */}
        <Contactinput />

        {/*  */}
      </div>
 
 
     </section>
  );
}

export default ContactPage;
