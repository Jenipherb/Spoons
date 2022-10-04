import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


function Spoons( {user, tasks}){
    console.log(tasks)
    console.log(user)

    const [spoon, setSpoon] = useState([])

    useEffect(() => {
        fetch("/spoons").then((r) => {
            if (r.ok){
                r.json().then((data) => {
                    setSpoon(data)
                })
            } else {
                throw new Error("Unable to retrieve latest spoon")
            }
        })
    }, [])
    return(
        <div>
            
            <Link to="/task-added">
                <Button type="submit">
                    Add Task
                </Button>
            </Link>
        </div>
    )
}


export default Spoons