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
    
    
   
    


    return(
   
        <div>
            <h2>No Assigned Spoons, see Tasks below</h2>
            <Link to="/tasks">
                <Button type="submit">
                    View Tasks
                </Button>
            </Link>
            <Link to="/task-added">
                <Button type="submit">
                    Add Task
                </Button>
            </Link>
        </div>    
    )
}

export default YourSpoon