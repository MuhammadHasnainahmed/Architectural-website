
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  "/buil1.JPG",
  "/buil2.jpg",
  "/buil3.jpg",
  "/buil4.jpg",
  "/aboutimage.jpg",
  "/hero-background.JPG",
];

function Gallerypage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <Zoom key={index}>
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </Zoom>
        ))}
      </div>
    </div>
  );
}

export default Gallerypage;
