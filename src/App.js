import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from "./components/Layout";
import StreamList from "./components/StreamList";
import Movies from './components/Movies';
import Cart from './components/Cart';
import MyAboutPage from './components/About';
import NoPage from "./components/NoPage";

import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CreditCardForm from './components/CreditCardForm';
import OrderConfirmation from './components/OrderConfirmation';
import Login from './components/Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StreamList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<MyAboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


