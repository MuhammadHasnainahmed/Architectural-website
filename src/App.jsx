import { Routes, Route } from "react-router-dom";
import Herosection from "./Pages/Herosection";
import Aboutsection from "./Pages/Aboutsection";
import Videosection from "./Pages/Videosection";
import ServicesSection from "./Pages/ServicesSection";
import ContactPage from "./Pages/Contactpage";
import Servicepage from "./Pages/Servicepage";
import Aboutpage from "./Pages/Aboutpage";
import Gallerypage from "./Pages/Gallerypage";
import Gallery from "./Component/Gallery";
import WhyChooseUs from "./Component/WhyChooseUs";

function App() {
  return (
    <main className="flex-grow">
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Herosection />
              <ServicesSection />
              <Aboutsection />
              <Videosection />
              <WhyChooseUs />
              <Gallery startIndex={0} limit={6}/>
            </>
          }
        />


        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/gallery" element={<Gallerypage />} />

      </Routes>
    </main>

  );
}

export default App;
