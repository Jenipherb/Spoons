import Task from "./Task"
import { useEffect, useState } from "react"




function TaskList( {user} ){

    const [task, setTasks] = useState([])

    useEffect(() => {
        fetch("/tasks").then((r) => {
        if (r.ok){
            r.json().then((data) => {
                setTasks(data)
            })
        } else {
            throw new Error("Unable to retrieve latest task")
        }
    })})

    return(
        <div>
            <Task key={task.id} task={task} user_id={user.id}/>
        </div>
    )
}


export default TaskList