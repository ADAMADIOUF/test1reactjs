import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/Product'
import { DataProvide } from './component/DataProvide';
import Details from './component/Details';
export default function App() {
  return (
    <DataProvide>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='products' element={<Product />} />
          <Route path='products/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </DataProvide>
  );
}
