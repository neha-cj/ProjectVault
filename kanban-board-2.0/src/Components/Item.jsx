import React from "react";

function Item({task, onDragStart}){
    
    
    return(
        <div>
            <p className="p-1 m-2 border rounded shadow-lg bg-white " draggable onDragStart={(e)=>onDragStart(e,task)}>  {task.text}</p>
        </div>
    )
}
export default Item
