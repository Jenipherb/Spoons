import Spoons from "./Spoons"
import { Card } from 'react-bootstrap'


function Home(user){
    return(
        <div>
            <Card>
                <Card.Header as="h-5">Spoons</Card.Header>
                <Spoons user={user}/>
            </Card>
        </div>
    )
}


export default Home