import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Herosection from "./Pages/Herosection";
import Aboutsection from "./Pages/Aboutsection";
import Projectsection from "./Pages/Projectsection";
import Videosection from "./Pages/Videosection";
import Contactsection from "./Pages/Contactsection";
import ServicesSection from "./Pages/ServicesSection";
import TestimonialsSection from "./Pages/TestimonialsSection";
import ContactPage from "./Pages/Contactpage";
import Servicepage from "./Pages/Servicepage";
import Aboutpage from "./Pages/Aboutpage";
import Gallerypage from "./Pages/Gallerypage";

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
              <Projectsection />
              <TestimonialsSection />
              <Contactsection />
            </>
          }
        />

       
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/gallery" element={<Gallerypage/>} />
        
      </Routes>
   </main>

  );
}

export default App;
