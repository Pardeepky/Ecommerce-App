import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Store from './views/Store';
import About from './views/About';
import CartProvider from './context/CartProvider';
import ContactUs from './views/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
    </CartProvider>
  </React.StrictMode>
);
