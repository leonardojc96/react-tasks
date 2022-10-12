import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/Tasks' 


export const TaskContext = createContext()

export default function TaskContextProvider(props) {
    let x = 20
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
      setTasks(data)
    }, [])

    function createTask(task) {
      setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description
      }])
    }

    function deleteTask(id) {
      setTasks(tasks.filter(task => task.id != id))
    }

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
