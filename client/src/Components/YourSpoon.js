import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import SpoonOfTask from "./SpoonOfTask"



function YourSpoon(onLogout){
   
        
    
    

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
            <Link onClick={onLogout}>
                <Button type="submit">
                    Logout
                </Button>
            </Link>
        </div>    
    )
}

export default YourSpoon