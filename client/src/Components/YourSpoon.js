import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import SpoonOfTask from "./SpoonOfTask"



function YourSpoon( { user }){
    
    const [spoons, setSpoons] = useState([])
        
    
    
    
    
   
    


    return(
   
        <div>
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
            <SpoonOfTask task={user.tasks} spoons={user.spoons} />
        </div>    
    )
}

export default YourSpoon