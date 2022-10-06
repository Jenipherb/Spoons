import { Card } from "react-bootstrap"


function DailySpoons({ spoon }){
    console.log(spoon)
    return(
        <div>
           <Card.Text>Spoons: {spoon}</Card.Text> 
        </div>
    )
}

export default DailySpoons