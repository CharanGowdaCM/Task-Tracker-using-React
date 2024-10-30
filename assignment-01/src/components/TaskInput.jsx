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
    <div>Add  your tasks here</div>

    <form onSubmit={add}>
        <input type="text" 
         placeholder="Enter task title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         required
        />
        
        <button type="submit">Add</button>

    </form>
    </>
    )
}

export default TaskInput