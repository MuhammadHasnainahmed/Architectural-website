const images = [
  "/built (1).jpg",
  "/built (2).jpg",
  "/built (3).jpg",
  "/built (4).jpg",
  "/built (5).jpg",
  "/built (6).jpg",
  "/built (7).jpg",
  "/built (8).jpg",
  "/built (9).jpg",
  "/built (10).jpg",
  "/built (10).jpg",
  "/built (12).jpg",
  "/built (13).jpg",
  "/built (14).jpg",
  "/built (15).jpg",
  "/built (16).jpg",
  "/built (17).jpg",
  "/built (18).jpg",
  "/built (19).jpg",
  "/built (20).jpg",
  "/built (21).jpg",
  "/built (22).jpg",
  "/built (23).jpg",
  "/built (24).jpg",
  "/built (25).jpg",
  "/built (26).jpg",
  "/built (27).jpg",
  "/built (28).jpg",
  "/built (29).jpg",
  "/built (30).jpg",
  "/built (31).jpg",
  "/built (32).jpg",
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

      {isSection && (
        <button className="w-[200px] mt-12 mx-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          See more
        </button>
      )}
    </div>
  );
};

export default Gallery;
