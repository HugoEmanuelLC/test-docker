import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './composants/header/header'
import Footer from './composants/footer/footer'

import NotFoundPage from './pages/notFoundPage'
import Home from './pages/home/home' 
import ListDeProjets from './pages/projets/listDeProjets'
import About from './pages/about/about'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/list-de-projets" element={<ListDeProjets/>} />
      <Route path='*' element={ <NotFoundPage /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App
