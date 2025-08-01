import React, { useState } from 'react'
import ProductList from './Components/ProductList'
import Header from './Components/Header'


function App(){ 
  const [searchTerm, setSearchTerm] = useState('');
  const [category,setCategory] = useState('');

  return (
    <> 
      <Header onSearchChange={setSearchTerm} onCategoryChange={setCategory} />
      <ProductList searchTerm={searchTerm} category={category}/>
    </>
  )
}

export default App
