import { useState, useEffect } from "react"
import YourSpoon from "./YourSpoon"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


function Spoons( {user, tasks}){
    console.log(tasks)
    

    const [spoon, setSpoon] = useState([])

    useEffect(() => {
        fetch("/me/spoons").then((r) => {
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
            <YourSpoon user={user} tasks={tasks} spoons={spoon}/> 
            
        </div>
    )
}


export default Spoons