import { useState } from "react"

function Task( {task, user_id}){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [due, setDue] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    
    fetch("task_added", {
        method: "POST",
        headers: {
            "Content-Type": "application-json"
        },
        body: JSON.stringify({
            title:title,
            description: description,
            priority: priority,
            due: due    
        }),
    })  
        .then((r) => r.json())
        .then((task) => {
            setTitle("")
            setDescription("")
            setPriority("")
            setDue("")
        })
    }

    return(
        <div></div>
    )
}


export default Task