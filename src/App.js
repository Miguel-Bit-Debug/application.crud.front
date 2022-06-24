import React from 'react';
import Home from './Views/home/index'
import NewProduct from './Views/addProduct'
import InforProduct from './Views/infoProduct'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/new-product" element={<NewProduct />} />
      <Route exact path="/info-product/:id" element={<InforProduct />} />
      </Routes>
    </Router>
  )
}

export default App;