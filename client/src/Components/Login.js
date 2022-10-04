import { useState } from "react"
import { Link } from "react-router-dom"
import { Form, Button, Container } from 'react-bootstrap'



function Login( {onLogin} ){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => r.json())
            .then(onLogin())
    }
    
    return(
        <div>
            <Container fluid="md">            
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter Username"
                        value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Link to="/home" onClick={() => setTimeout(500)}>
                        <Button variant="primary" type="submit">
                            Submit 
                        </Button>
                    </Link>    
                </Form>     
            </Container>
                <span>
                    or   
                <Link to="/signup" onClick={() => setTimeout(500)}>
                    <br/>
                    <Button variant="primary" type="submit">
                        SignUp
                    </Button>
                    <br/>      
                </Link>
                </span>
        </div>
    )
}

export default Login