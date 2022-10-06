import { Card, ListGroup } from "react-bootstrap"



function SpoonOfTask({task, spoons}){
    console.log(task)
    console.log(spoons)

 

    
    return(
        <div>
            <Card style={{width: '18rem'}}>
                <ListGroup variant="flush">
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default SpoonOfTask