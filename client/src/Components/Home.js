import TaskList from "./TaskList"


function Home(user){
    return(
        <div>
            <h2>Spoon Full of Sugar</h2>
            <TaskList user={user}/>
        </div>
    )
}


export default Home