import React, { useState } from 'react'
import ProductList from './Components/ProductList'
import Header from './Components/Header'


function App(){ 
  const [searchTerm, setSearchTerm] = useState('');
  const [category,setCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  return (
    <> 
      <Header onSearchChange={setSearchTerm} onCategoryChange={setCategory} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <ProductList searchTerm={searchTerm} category={category} onAddToCart={handleAddToCart} />
    </>
  )
}

export default App
