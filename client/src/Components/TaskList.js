import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"

import OneTask from "./OneTask"



function TaskList( {user} ){
    console.log(user)

   const [tasks, setTasks] = useState([])

  
   useEffect(() => {
    fetch("/tasks")
    .then((r) => r.json())
    .then((data) => setTasks(data))
   }, [])
   
   console.log(tasks)
   const taskToDisplay = tasks.map((task) => (
    <OneTask key={task.id} task={task} />
   ))

   return(
    <div>
        <CardGroup>
            {taskToDisplay}
        </CardGroup>
    </div>
   )

   
        
       
    
}


export default TaskList