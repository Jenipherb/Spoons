import { useState } from "react"
import { Form, Col, Row, Button } from 'react-bootstrap'

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
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            priority: priority,
            due: due,
            description: description    
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
        <div>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="ex. laundry" value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Due</Form.Label>
                        <Form.Control type="due" placeholder="ex. 3 days" 
                        onChange={(e) => setDue(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="description" placeholder="ex. Get all laundry done"
                        onChange={(e) => setDescription(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Priority</Form.Label>
                        <Form.Control type="priority" placeholder="Low, Medium, High"
                        onChange={(e) => setPriority(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}


export default Task