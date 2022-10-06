import { Card, CardGroup, ListGroup } from "react-bootstrap";
import YourTasks from "./YourTasks";
import DailySpoons from "./DailySpoons";
import { useEffect, useState } from "react"


function SpoonOfTask({ tasks }) {
  console.log(tasks);


  const [spoons, setSpoons] = useState([])

  useEffect(() => {
    fetch("/spoons")
    .then((r) => r.json())
    .then((data) => setSpoons(data))
   }, [])


  return (
    <div>
      <CardGroup>
            <Card.Body>
                {
                    spoons.map((spoon) => {
                        return(
                            <DailySpoons
                            key={spoon.id}
                            spoon={spoon.spoon}
                            />)
                    }
                    )
                }
            {
                tasks.map((task) => {
                    return(
                    <YourTasks 
                      key={task.id}
                      task={task}
                      title={task.title}
                      description={task.description}
                      due={task.due}
                      priority={task.priority}

                    />)
                }

                )
            }
            </Card.Body>
      </CardGroup>
    </div>
  );
}

export default SpoonOfTask;
