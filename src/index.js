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
import ProductDetails from './components/Products/ProductDetails';
import AuthProvider from './context/AuthProvider';
import Login from './views/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='/' element={<Home />} />
              <Route path='store' element={<Store />} />
              <Route path='store/:id' element={<ProductDetails />} />
              <Route path='about' element={<About />} />
              <Route path='login' element={<Login />} />
              <Route path='contact-us' element={<ContactUs />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);
