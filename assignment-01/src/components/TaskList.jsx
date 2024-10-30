import React  from "react"

const TaskList = ({ tasks, deleteTask, status }) => {
  
return (
  <>
    <div>Your tasks </div>
    {tasks.length != 0  
    ?
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>

            {task.title}
            <br></br>
            <input  type="checkbox"  checked={task.completed} onChange={() => status(task.id)}/>

            {task.completed ?<span> Completed</span>: <span>Not completed</span>}
            &nbsp;&nbsp;
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ol> 
    : <span>U have no tasks to do</span>}
  </>
);
}

export default TaskList