import React, { useState } from "react"

import Item from './Components/Item'
function App() {
  const [inputValue, setInputValue] = useState('')

  const [tasks, setTasks] =useState([{id:1,text:'clean',completed:false}])
  
  function addTask(text){
    if(text.trim()==''){
      alert("write something to add a task")
    }
    const newTask={
      id:Date.now(),
      text,
      completed:false
    };
    setTasks([...tasks, newTask])
    console.log(tasks)
  }
  
  return (
    <div className='m-3'>
      <div className='flex justify-between'>
        <h1 className='font-semibold text-3xl'>KanBan Board</h1>
        <div className='flex gap-2'>
          <input className='p-2 border rounded w-full' type='text' placeholder='enter a new task' onChange={(e)=>setInputValue(e.target.value)}/>
          <button className='p-2 border rounded' onClick={()=>addTask(inputValue)}>Add</button>
        </div>
      </div>
      <section className='min-h-[80vh] flex gap-[5vw] m-10'>
        <div className='flex-1 bg-blue-200 rounded'>
          <h2 className='font-semibold text-2xl p-2 m-2'>ToDo</h2>
          <div>
            {tasks.map(task => (<Item key={task.id} task={task} />))}
          </div>
        </div>
        <div className='flex flex-1 bg-blue-300 rounded '>
          <h2 className='font-semibold text-2xl p-2 m-2'>InProgress</h2>
          <div></div>
        </div>
        <div className='flex flex-1 bg-blue-400 rounded'>
          <h2 className='font-semibold text-2xl p-2 m-2'>Done</h2>
          <div></div>
        </div>
      </section>
    </div>
  )
}

export default App
