import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import About from '../about/screens'
import Header from '../common/header'
import Contact from '../contact/screens'
import Home from '../home/screens/Home'

export default function RootNavigation() {
  return (
    <Router>
      <TitleUpdater />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

function TitleUpdater() {
  const location = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'Grupo 3 - Inicio',
      '/about': 'Grupo 3 - Acerca de Nosotros',
      '/contact': 'Grupo 3 - Contacto',
    }

    document.title = titles[location.pathname] || 'Grupo 3'
  }, [location])

  return null
}