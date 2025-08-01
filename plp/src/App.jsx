import React, { useState } from 'react'
import ProductList from './Components/ProductList'
import Header from './Components/Header'


function App(){ 
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <> 
      <Header onSearchChange={setSearchTerm} />
      <ProductList searchTerm={searchTerm}/>
    </>
  )
}

export default App
