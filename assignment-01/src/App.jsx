import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [ tasks, setTasks] = useState([])

  const addTask = (title)=>{
    let newTask={
      id : Date.now(),
      title,
      completed : false,
    }
    setTasks((prev)=>[...prev , newTask])
   
  }

  const deleteTask = (id)=>{
    const afterDelete = tasks.filter((task)=> id != task.id)
    setTasks(afterDelete)
  }


  const status = (id)=>{
    const afterCompleted = tasks.map((task)=> 
      task.id == id ? { ...task, completed: !task.completed } : task)
      setTasks(afterCompleted)
      }
  
  
  return (
    <>
  
      <h1>Task Tracker</h1>
      <TaskList  tasks={tasks} deleteTask={deleteTask} status={status} />
      <TaskInput addTask={addTask}/>
     
    </>
  )
}

export default App
