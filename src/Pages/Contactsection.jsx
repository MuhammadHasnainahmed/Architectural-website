import React from "react";
import Contactinput from "../Component/Contactinput";

function Contactsection() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4 gap-10">
        
     
        <div className="md:w-1/2">
          <h1 className="text-orange-500 font-bold text-4xl md:text-5xl mb-4">
            GET IN TOUCH
          </h1>
          <p className="mt-2 text-gray-600 text-lg md:text-xl mb-6">
            We’d love to hear from you. Reach out for inquiries or project details.
          </p>

        
          <div className="text-gray-700 space-y-3">
            <p><strong>Location:</strong> Perth, Western Australia (We service all WA)</p>
            <p><strong>Phone:</strong> 0457 209 649</p>
            <p><strong>Email:</strong> <a href="mailto:admin@dingobuilt.com" className="text-orange-500">admin@dingobuilt.com</a></p>
          </div>
        </div>

         
         <Contactinput/>
        
      </div>
    </section>
  );
}

export default Contactsection;
