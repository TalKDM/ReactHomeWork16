import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { productList } from './productList';
import { ContextProvider } from './context/Context';

function App() {

  return (
    <div className="App">
      <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
