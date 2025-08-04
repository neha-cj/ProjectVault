import React, { useState } from 'react'
import ProductList from './Components/ProductList'
import Header from './Components/Header'
import Cart from './Components/Cart'


function App(){ 
  const [searchTerm, setSearchTerm] = useState('');
  const [category,setCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const current = prevCart.find(item =>item.id=== product.id);
      if (current) {
        return prevCart.map(item =>item.id=== product.id ?{ ...item, quantity: item.quantity + 1 }:item);
      } else {
        return [...prevCart,{ ...product, quantity: 1 }];
      }
    });
  };

  const handleDeleteFromCart= (product) =>{
    const updatedCart= cartItems.filter(item=>item.id !== product.id);
    setCartItems(updatedCart)
  }

  return (
    <> 
      <Header onSearchChange={setSearchTerm} onCategoryChange={setCategory} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      <ProductList searchTerm={searchTerm} category={category} onAddToCart={handleAddToCart} />
      {isCartOpen && <Cart cartItems={cartItems} deleteFromCart={handleDeleteFromCart} setCartItems={setCartItems} />}
    </>
  )
}

export default App
