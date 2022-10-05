import { useState } from "react"
import { Card, Form } from "react-bootstrap"



function OneTask ( {task, user_id}) {
    console.log(task)

    const [spoon, setSpoon] = useState("")
    

    function handleSubmit(e){
        e.preventDefault()
     fetch("spoon_added", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                spoon: spoon,
                task_id: task.id,
                user_id: user_id

             }),
        })
            .then((r) => r.json())
            .then((spoon) => {
                setSpoon("")

                console.log(spoon)
            })
    }

    return(
        <div>
            <Card style={{ width: '18rem' }} >
                <Card.Title key={user_id}>{task.title}</Card.Title>
                <Card.Text key={user_id}>Description: {task.description}</Card.Text>
                <Card.Text key={user_id}>Priority: {task.priority}</Card.Text>
                <Card.Text key={user_id}>Due: {task.due}</Card.Text>
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                        <Form.Label>How Many Spoons will this task take?</Form.Label>
                        <Form.Control type="spoons" placeholder=" ex. 3 spoons"
                        onChange={(e) => setSpoon(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}


export default OneTask