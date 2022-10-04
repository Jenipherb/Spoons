import TaskList from "./TaskList"
import { Card } from 'react-bootstrap'


function Home(user){
    return(
        <div>
            <Card>
                <Card.Header as="h-5">Task</Card.Header>
                <TaskList user={user}/>
            </Card>
        </div>
    )
}


export default Home