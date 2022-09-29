import TaskList from "./TaskList"


function Home(user){
    return(
        <div>
            <h2>Home Page</h2>
            <TaskList user={user}/>
        </div>
    )
}


export default Home