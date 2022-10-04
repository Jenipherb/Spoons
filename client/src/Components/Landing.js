import Login from "./Login"


function Landing(onLogin){
    return(
        <div className="text-center">
            <h2>Spoon Full of Sugar</h2>
            <Login onLogin={onLogin}/>
            
        </div>
    )
}

export default Landing