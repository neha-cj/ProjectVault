let Mytasks = JSON.parse(localStorage.getItem('MyTasks')) || [];
let draggedItem =null;

function renderAllTasks() {
  document.querySelectorAll('.task-list').forEach(list => list.innerHTML = '');
  Mytasks.forEach(task => {
    const columnDiv =document.querySelector(`[data-column="${task.column}"] .task-list`);
    const element =createTaskElement(task);
    columnDiv.appendChild(element);
  });
}

function addTask() {
  const inputElement = document.querySelector('.entry-field');
  const inputVal = inputElement.value.trim();
  if (inputVal!== '') {
    Mytasks.push({text: inputVal, column:'todo'});
    localStorage.setItem('MyTasks', JSON.stringify(Mytasks));
    inputElement.value ='';
    renderAllTasks();
  } else {
    alert("Please enter a value before adding a task.");
  }
}

function createTaskElement(task) {
  const taskItem = document.createElement("div");
  taskItem.setAttribute("draggable", "true");
  taskItem.className ='draggable task-item bg-white flex space-x-3 rounded shadow-xl p-4 m-3';

  const taskText = document.createElement("p");
  taskText.className ="flex-grow cursor-pointer";
  taskText.innerText =task.text;

  const buttonDiv=document.createElement("div");
  buttonDiv.className="flex gap-2";

  const editBtn = document.createElement("button");
  editBtn.className='text-blue-500 hover:text-blue-700';
  editBtn.innerHTML='<i class="fa fa-pencil"></i>';

  const deleteBtn = document.createElement("button");
  deleteBtn.className='text-red-500 hover:text-red-700';
  deleteBtn.innerHTML='<i class="fa fa-trash"></i>';

  deleteBtn.onclick =()=> {
    Mytasks = Mytasks.filter(t => t.text !== task.text);
    localStorage.setItem('MyTasks', JSON.stringify(Mytasks));
    renderAllTasks();
  };

  editBtn.onclick = () => {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "px-2 py-1 w-full";
    input.value = task.text;
    taskItem.replaceChild(input, taskText);
    input.focus();

    const save =()=> {
      const newText = input.value.trim();
      if (newText !== "") {
        task.text=newText;
        localStorage.setItem("MyTasks", JSON.stringify(Mytasks));
        renderAllTasks();
      }else{
        taskItem.replaceChild(taskText, input);
      }
    };
    input.addEventListener("keydown",(e) => {
      if(e.key=== "Enter") {
        save();
      }
    });
  };

  buttonDiv.appendChild(editBtn);
  buttonDiv.appendChild(deleteBtn);
  taskItem.appendChild(taskText);
  taskItem.appendChild(buttonDiv);

  taskItem.addEventListener("dragstart", () => {
    draggedItem = taskItem;
    setTimeout(() => taskItem.classList.add("hidden"), 0);
  });

  taskItem.addEventListener("dragend", () => {
    taskItem.classList.remove("hidden");
    draggedItem = null;
  });
  return taskItem;
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllTasks();
  document.querySelectorAll(".column").forEach(col => {
    col.addEventListener("dragover",e => e.preventDefault());

    col.addEventListener("drop",e=> {
      e.preventDefault();
      if (draggedItem) {
        const columnId = col.getAttribute("data-column");
        const draggedText = draggedItem.querySelector("p").innerText;
        Mytasks = Mytasks.map(task =>task.text === draggedText ? { ...task, column: columnId } : task);
        localStorage.setItem("MyTasks", JSON.stringify(Mytasks));
        renderAllTasks();
      }
    });
  });
});
