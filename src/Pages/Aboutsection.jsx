import React from "react";

function Aboutsection() {
  return (
    <section id="about" className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src="/aboutimage.jpg"
          alt="About Gothic Studio"
          className="w-full h-auto object-cover "
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl  font-extrabold text-gray-900 tracking-wide mb-6">
            Dingo built
            <hr  className=" w-[20%] mt-2 border-2 border-orange-500 "/>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          reiciendis veniam odio recusandae nam facilis quam sunt, unde
          accusamus.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fuga
          exercitationem aliquid porro, velit blanditiis nisi nostrum dolorem
          modi iste voluptatibus sunt quisquam quis sapiente officia laboriosam.
          Unde, consequatur ipsum.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eum
          dolores, vero asperiores exercitationem aliquid quam numquam unde
        
        </p>

        {/* Signature */}
        <div>
          <p className="font-signature text-lg mb-1">Dingo</p>
          <p className="font-semibold tracking-wide text-gray-700">Dingo Built</p>
        </div>
      </div>
    </section>
  );
}

export default Aboutsection;
