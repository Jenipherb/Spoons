import Login from "./Login"
import SignUp from "./SignUp"

function Landing(onLogin){
    return(
        <div className="text-center">
            <h2>Spoon Full of Sugar</h2>
            <Login onLogin={onLogin}/>
            <SignUp onLogin={onLogin} />
        </div>
    )
}

export default Landing