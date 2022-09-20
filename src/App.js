import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {CartProvider} from './components/CartContext/CartContext';
import {CartContainer} from './components/CartContainer/CartContainer'


function App() {


  return (
    <CartProvider> 
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar/>
            <CartWidget/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/contacto" element={<Contact/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<CartContainer/>}/>
            </Routes> 
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;