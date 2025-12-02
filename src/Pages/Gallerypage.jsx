import Gallery from "../Component/Gallery";



function Gallerypage() {
  return (
    <>
      <section style={{ backgroundImage: "url(/contact-banner.jpg)" }}
        className="flex justify-center items-center relative bg-black text-white py-24 bg-center bg-cover">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-50 ">
          <h1 className=" text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-orange-500">  Gallery</span>
          </h1>
        </div>
      </section>  
        <Gallery startIndex={0} limit={22} isSection={false} />
      </>
      );
}

      export default Gallerypage;
