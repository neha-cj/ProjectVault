import React,{ useState } from 'react'
import ProductList from './Components/ProductList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element ={<Login />} />
            <Route path="/home" element={<ProductList />} />
          </Routes> 
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
