import React,{useState} from "react";

function Item({task}){
    return(
        <div >
            <p draggable='true' className="p-1 m-2 border rounded shadow-lg ">{task.text}</p>
        </div>
    )
}
export default Item
