import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Catagories from './components/Catagories/Catagories';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Catagories />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
