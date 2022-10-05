import YourSpoon from './YourSpoon'
import { Card } from 'react-bootstrap'



function Home( {user} ){

  
    return(
        <div>
            <Card>
                <Card.Header as="h-5"> Your Spoons</Card.Header>
                <YourSpoon user={user}/>
            </Card>
        </div>
    )
}


export default Home