import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaNewspaper, FaBug } from "react-icons/fa";
import Contactinput from "../Component/Contactinput";
import { IoLocationSharp } from "react-icons/io5";



function ContactPage() {


  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-12">

          <Contactinput />      

        
        <div className="md:w-1/2  grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-md">
              <FaPhoneAlt className="text-orange-600 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              {/* <p className="text-gray-600 text-sm">support@example.com</p> */}
              <p className="text-gray-600 text-sm">0457 209 649</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-md">
              <IoLocationSharp  className="text-orange-600 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              {/* <p className="text-gray-600 text-sm">sales@example.com</p> */}
              <p className="text-gray-600 text-sm"> Perth, Western Australia (We service all WA)</p>
            </div>
          </div>
       
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-md">
              <FaBug className="text-orange-600 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600 text-sm">admin@dingobuilt.com</p>
              {/* <p className="text-gray-600 text-sm">+1 234-567-89</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
