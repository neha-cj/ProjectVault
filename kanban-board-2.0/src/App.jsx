import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-3'>
      <div className='flex justify-between'>
        <h1 className='text-black font-semibold text-3xl'>KanBan Board</h1>
        <div className='flex gap-2'>
          <input className='p-2 border rounded w-full' type='text' placeholder='enter a new task'/>
          <button className='p-2 border rounded'>Add</button>
        </div>
      </div>
      <section className='min-h-[80vh]'>
        <div className='flex-1 bg-blue-200 rounded'>
          <h2></h2>
          <div></div>
        </div>
        <div>
          <h2></h2>
          <div></div>
        </div>
        <div>
          <h2></h2>
          <div></div>
        </div>
      </section>
      
    </div>
  )
}

export default App
