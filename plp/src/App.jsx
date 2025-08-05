import React, { useEffect, useState } from 'react'
import ProductList from './Components/ProductList'
import Header from './Components/Header'
import Cart from './Components/Cart'


function App(){ 
  const [searchTerm, setSearchTerm] = useState('');
  const [category,setCategory] = useState('');
  const [cartItems, setCartItems] = useState(() =>{
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(()=>{
    const stored=localStorage.getItem('cart')
    console.log("Loaded cart-", stored);
    if(stored){
      setCartItems(JSON.parse(stored))
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItems))
    console.log("Cart from localstorgae-", cartItems);
  },[cartItems]);

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
  const handleIncrement =(productId) => {
    setCartItems(prevCart =>
      prevCart.map(item =>item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };
  const handleDecrement =(productId) => {
    setCartItems(prevCart =>
      prevCart.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0)
    );
  };


  return (
    <> 
      <Header onSearchChange={setSearchTerm} onCategoryChange={setCategory} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} onCartClick={() => setIsCartOpen(!isCartOpen)} />
      
      {isCartOpen ? 
        (<Cart cartItems={cartItems} goBack={() => setIsCartOpen(false)} increment={handleIncrement} decrement={handleDecrement} deleteItem={handleDeleteFromCart}/>):
        (<ProductList searchTerm={searchTerm} category={category} onAddToCart={handleAddToCart}/>)
      }
    </>
  )
}

export default App
