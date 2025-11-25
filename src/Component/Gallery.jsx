const images = [
  "../../public/built (1).jpg",
  "../../public/built (2).jpg",
  "../../public/built (3).jpg",
  "../../public/built (4).jpg",
  "../../public/built (5).jpg",
  "../../public/built (6).jpg",
  "../../public/built (7).jpg",
  "../../public/built (8).jpg",
  "../../public/built (9).jpg",
  "../../public/built (10).jpg",
  "../../public/built (10).jpg",
  "../../public/built (12).jpg",
  "../../public/built (13).jpg",
  "../../public/built (14).jpg",
  "../../public/built (15).jpg",
  "../../public/built (16).jpg",
  "../../public/built (17).jpg",
  "../../public/built (18).jpg",
  "../../public/built (19).jpg",
  "../../public/built (20).jpg",
  "../../public/built (21).jpg",
  "../../public/built (22).jpg",
  "../../public/built (23).jpg",
  "../../public/built (24).jpg",
  "../../public/built (25).jpg",
  "../../public/built (26).jpg",
  "../../public/built (27).jpg",
  "../../public/built (28).jpg",
  "../../public/built (29).jpg",
  "../../public/built (30).jpg",
  "../../public/built (31).jpg",
  "../../public/built (32).jpg",
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
