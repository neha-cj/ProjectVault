import React, { useState ,useRef, useEffect} from "react"
import Item from './Components/Item'

function App() {
  const [inputValue, setInputValue] = useState('')

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('myStoredArray');
    return stored ? JSON.parse(stored) : [];
  })

  function addTask(text){
    if(text.trim()==''){
      alert("write something to add a task")
      
    }
    else{
      const newTask={
        id:Date.now(),
        text,
        column:'todo'
      };
      setTasks([...tasks, newTask])
      console.log(tasks)
      setInputValue('')
    }
    
  }
  function deleteTask(id) {
  const updated = tasks.filter(task => task.id !== id);
  setTasks(updated);
}

  useEffect(()=>{
    localStorage.setItem('myStoredArray', JSON.stringify(tasks))
  },[tasks])
  useEffect(()=>{
    const storedArray= localStorage.getItem('myStoredArray');
    if(storedArray){
        try{
          setTasks(JSON.parse(storedArray))

        }catch(error){
          console.error("Error parsing stored array:", error)
          setTasks([]);
        }
      }
  },[])


  //track dragged item
  const dragItem = useRef(null);
  const dragStart= (e,task) => {
    dragItem.current = task;
  }
  //track column
  const hoveredColumn = useRef(null);
  const dragEnter =(e) =>{
        hoveredColumn.current= e.currentTarget.id;
  }
  const drop= () =>{
    const col= hoveredColumn.current;
    const updatedTasks = tasks.map(task=> 
      task.id === dragItem.current.id?{...task, column:col} : task
    );
    setTasks(updatedTasks)

  }
  
  return (
    <div className='mt-4 mx-6'>
      <div className='flex justify-between'>
        <h1 className='font-semibold text-3xl'>KanBan Board</h1>
        <div className='flex gap-2'>
          <input className='p-2 border rounded w-full' type='text' placeholder='enter a new task' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <button className='p-2 border rounded' onClick={()=>addTask(inputValue)}>Add</button>
        </div>
      </div>
      <section className='flex flex-col sm:flex-row min-h-[80vh] gap-[5vw] m-10'>

        <div className='flex-1 flex-col bg-blue-200 rounded' >
          <h2 className='font-semibold text-2xl p-2 m-2'>ToDo</h2>
          <div className="min-h-full min-w-full"  id="todo" onDragOver={(e) => e.preventDefault()} onDragEnter={dragEnter} onDrop={drop}>
              {tasks.filter(task => task.column === "todo").map(task => (
                <Item key={task.id} task={task} onDragStart={(e) => dragStart(e, task)} onDelete={deleteTask}/>
              ))}
          </div>
        </div>

        <div className='flex flex-col flex-1 bg-blue-300 rounded ' >
          <h2 className='font-semibold text-2xl p-2 m-2'>InProgress</h2>
          <div className="min-h-full min-w-full" id='inprogress' onDragOver={(e) =>e.preventDefault()} onDragEnter={(e)=> dragEnter(e)} onDrop={drop} >
             {tasks.filter(t => t.column === "inprogress").map(t => (
                <Item key={t.id} task={t} onDragStart={(e) => dragStart(e, t)} />
              ))}
          </div>
        </div>
        <div className='flex flex-col flex-1 bg-blue-400 rounded'>
          <h2 className='font-semibold text-2xl p-2 m-2'>Done</h2>
          <div className="min-h-full min-w-full" id='done' onDragOver={(e)=>e.preventDefault()} onDragEnter={(e)=> dragEnter(e)} onDrop={drop}> 
              {tasks.filter(t => t.column === "done").map(t=>(
                <Item key={t.id} task={t} onDragStart={(e) =>dragStart(e, t)} />
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
