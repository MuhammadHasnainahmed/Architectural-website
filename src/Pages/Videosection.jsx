import React from "react";

function Videosection() {
  return (
    <div className="relative flex justify-center items-center w-full h-[60vh] bg-gray-100">
   
      <video
        className="rounded-xl w-full h-full object-cover shadow-lg"
        autoPlay
        muted
        loop
        src="/video.mp4"
        type="video/mp4"
      />

      <div className="absolute text-center flex flex-col justify-center items-center inset-0 bg-orange-300/40  text-white px-4">
  
        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Watch Our Building Showcase
        </h2>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
          Discover the beauty and design of our latest projects
        </p>
      </div>
    </div>
  );
}

export default Videosection;
