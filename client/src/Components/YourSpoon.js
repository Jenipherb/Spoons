import { useState, useEffect } from "react"
import Spoons from "./Spoons"
import Task from "./Task"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


function YourSpoon( { user }){
    
    const [spoons, setSpoons] = useState([])
        
    
    useEffect(() => {
        fetch("me/tasks_spoons")
        .then((r) => r.json())
        .then((data) => setSpoons(data))
    }, [])
    
    
    console.log(user)
    console.log(spoons)
    



    return spoons.length > 0 ?(
        spoons.map((task) => <Task key={task.id} task={task} user_id={user.id} />)
    ) : (
        <div>
            <h2>Nothing to Display</h2>
            <Link to="/task-added">
                <Button type="submit">
                    Add Task
                </Button>
            </Link>
        </div>    
    )
}

export default YourSpoon