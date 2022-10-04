import Spoons from "./Spoons"
import { useEffect, useState } from "react"




function TaskList( {user} ){

    const [task, setTasks] = useState([])

    useEffect(() => {
        fetch("/tasks")
        .then((data) => data.json())
        .then((data) =>setTasks(data))
}, [])

    return(
        <div>
            <Spoons tasks={task} user={user}/>
        </div>
    )
}


export default TaskList