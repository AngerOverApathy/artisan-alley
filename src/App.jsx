import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <Link to='/'>Elegant Essence</Link>
        </header>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
