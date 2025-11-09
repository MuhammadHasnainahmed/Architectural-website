import React from 'react'
import Herosection from './Pages/Herosection'
import Aboutsection from './Pages/Aboutsection'
import Projectsection from './Pages/Projectsection'
import Videosection from './Pages/Videosection'
import Contactsection from './Pages/Contactsection'
import ServicesSection from './Pages/ServicesSection'
import TestimonialsSection from './Pages/TestimonialsSection'

function App() {
  return (
    <>
      <Herosection />
      <ServicesSection/>
      <Aboutsection/>
      <Videosection/>
      <Projectsection/>
      <TestimonialsSection/>
      <Contactsection/>
    </>
  )
}

export default App