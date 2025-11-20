// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Navbar from './Component/Navbar.jsx'
// import Footer from './Component/Footer.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   // <StrictMode >
//     <BrowserRouter>
//     <Navbar  />
//     <App />
//     <Footer/>
//     </BrowserRouter>
//   // </StrictMode>
// )



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Navbar stays outside Routes */}
      <Navbar />
      {/* App contains all your Routes */}
      <App />
      {/* Footer stays outside Routes */}
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
