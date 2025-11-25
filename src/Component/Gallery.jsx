import { Link } from "lucide-react";

const images = [
  "/built (1).JPG",
  "/built (2).JPG",
  "/built (3).JPG",
  "/built (4).JPG",
  "/built (5).JPG",
  "/built (6).JPG",
  "/built (7).JPG",
  "/built (8).JPG",
  "/built (9).JPG",
  "/built (10).JPG",
  "/built (10).JPG",
  "/built (12).JPG",
  "/built (13).JPG",
  "/built (14).JPG",
  "/built (15).JPG",
  "/built (16).JPG",
  "/built (17).JPG",
  "/built (18).JPG",
  "/built (19).JPG",
  "/built (20).JPG",
  "/built (21).JPG",
  "/built (22).JPG",
  "/built (23).JPG",
  "/built (24).JPG",
  "/built (25).JPG",
  "/built (26).JPG",
  "/built (27).JPG",
  "/built (28).JPG",
  "/built (29).JPG",
  "/built (30).JPG",
  "/built (31).JPG",
  "/built (32).JPG",
];

const Gallery = ({ startIndex, limit, isSection }) => {
  const visibleImages = limit ? images.slice(startIndex, limit) : images;

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our <span className="text-orange-500">Gallery</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
      <Link to="/gallery">
      {isSection && (
        <button className="w-[200px] mt-12 mx-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          See more
        </button>
      )}
      </Link>
    </div>
  );
};

export default Gallery;
