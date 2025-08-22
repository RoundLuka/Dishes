import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Menu from './Pages/Menu.jsx'
import Cart from './Pages/Cart.jsx';
import Contact from './Pages/Contact.jsx';
import { CartProvider } from './context/CartContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<App />} />
            <Route path="menu" element={<Menu />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
)

