import Task from "./Task"
import { useEffect, useState } from "react"




function TaskList( {user} ){

    const [task, setTasks] = useState([])

    useEffect(("/tasks").then((r) => {
        if (r.ok){
            r.json().then((data) => {
                setTasks(data)
            })
        }
    }))

    return(
        <div>
            <Task key={task.id} task={task} user_id={user.id}/>
        </div>
    )
}


export default TaskList