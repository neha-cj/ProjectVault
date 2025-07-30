import { useState } from 'react'
import ProductList from './Components/ProductList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen flex flex-col m-2 p-3 justify-center items-center'>
        <h1 className='text-2xl'>GENEV</h1>
        <ProductList />
      </div>
    </>
  )
}

export default App
