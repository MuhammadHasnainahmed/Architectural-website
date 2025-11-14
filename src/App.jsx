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
      </Routes>
   </main>

  );
}

export default App;
