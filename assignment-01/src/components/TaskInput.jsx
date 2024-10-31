import { useState } from "react"


const TaskInput = ({addTask})=>{

    const [title , setTitle] = useState('')

    const add = (e) => {
        e.preventDefault()
        addTask(title)
        setTitle('')
    }

    return(
    <>
    <div id="task_input">
    
    <h2>Add  your tasks here</h2>

    <form onSubmit={add}>
        <input type="text" 
         placeholder="Enter task title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         required
         id="input"
        />
        
        <button type="submit" id="add"> Add</button>

    </form>

        
    </div>
    </>
    )
}

export default TaskInput