import React from "react";

function Item({task, onDragStart, onDelete}){
    return(
        <div className="flex justify-between bg-white m-2 border rounded shadow-lg">
            <p className="p-1 " draggable onDragStart={(e)=>onDragStart(e,task)}>  {task.text}</p>
            <button className="text-black hover:text-red-800 p-1 " onClick={()=>onDelete(task.id)} ><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default Item
