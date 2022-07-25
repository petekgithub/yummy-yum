import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from 'pages/Home';
import Cuisine from 'pages/Cuisine';
import Searched from 'pages/Searched';
import Recipe from 'pages/Recipe';




function Pages() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    
    </Routes>
    </AnimatePresence>
  )
}

export default Pages