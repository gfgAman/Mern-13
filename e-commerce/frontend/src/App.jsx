import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListing from './components/screens/ProductListing'
import Header from './components/utility components/Header'
import ProductDetail from './components/screens/ProductDetail'
import Cart from './components/screens/Cart'
import Login from './components/screens/Login'
import {products} from '../src/assets/data'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing products = {products}/>} />
        <Route path='/product-details/:id' element={<ProductDetail products = {products}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App