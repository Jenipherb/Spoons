import YourSpoon from './YourSpoon'
import { Card } from 'react-bootstrap'
import Navbar from './Navbar'
import SpoonOfTask from './SpoonOfTask'



function Home( {user} ){
    console.log(user)
    console.log(user.tasks)

  
    return(
        <div>
            <h2>Hi {user.username}!</h2>
        
                <YourSpoon user={user}/>
                <SpoonOfTask user={user}/>
           
        </div>
    )
}


export default Home