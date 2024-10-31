import React  from "react"

const TaskList = ({ tasks, deleteTask, status }) => {
  
return (
  <>
    
    {tasks.length != 0  
    ?
      <section id="list">
        <h2>Your tasks </h2>
        {tasks.map((task) => (
          <li id="list_items">

            <h3>{task.title}</h3>
            <div id="below_task">
            <input  type="checkbox"  checked={task.completed} onChange={() => status(task.id)}/>

            {task.completed ?<span id="compl"> Completed</span>: <span id="not_compl">Not completed</span>}
           
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </section> 
    : <span id="list"> <h2> U have no tasks to do </h2></span>}
  </>
);
}

export default TaskList