import YourSpoon from './YourSpoon'
import { Card, CardGroup } from 'react-bootstrap'
import Navbar from './Navbar'
import SpoonOfTask from './SpoonOfTask'
import { useEffect, useState} from "react"



function Home( {username, onLogout} ){
    console.log(username)
    

    const [tasks, setTasks] = useState([])
    
    
    useEffect(() => {
        fetch("/tasks")
        .then((r) => r.json())
        .then((data) => setTasks(data))
       }, [])

 
   

     
  
    return(
        <div>
            <h2>Hi {username}!</h2>
        
                <YourSpoon onLogout={onLogout}/>
                <span>
                <SpoonOfTask tasks={tasks} />
                </span>
           
        </div>
    )
}


export default Home