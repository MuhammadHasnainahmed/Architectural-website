import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/Home Page.jpg",
  "/Home Page1.jpeg",
  "/Home Page2.jpg",
  "/Home Page3.HEIC",
  "/Home page4.jpg",
  "/Home Page5.jpg",
  "/Gallery (1).jpeg",
  "/Gallery (1).JPG",
  "/Gallery (2).jpeg",
  "/Gallery (2).JPG",
  "/Gallery (3).jpeg",
  "/Gallery (3).JPG",
  "/Gallery (4).jpeg",
  "/Gallery (4).JPG",
  "/Gallery (5).jpeg",
  "/Gallery (5).JPG",
  "/Gallery (6).jpeg",
  "/Gallery (6).JPG",
  "/Gallery (7).JPG",
  "/Gallery (8).JPG",
  "/Gallery (9).JPG",
  "/Gallery (10).JPG",
  "/Gallery (11).JPG",
  "/Gallery (12).JPG",
  "/Gallery (13).JPG",
  "/Gallery (14).JPG",
 ];

const Gallery = ({ startIndex, limit, isSection }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const visibleImages = limit ? images.slice(startIndex, limit) : images;

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our <span className="text-orange-500">Gallery</span>
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition duration-300"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* See More Button */}
      {isSection && (
        <button className="w-[200px] mt-12 mx-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          <Link to="/gallery">See more</Link>
        </button>
      )}

      {/* Modal (Fullscreen Image) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
