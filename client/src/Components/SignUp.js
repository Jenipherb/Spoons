import { useState } from "react"
import { Form, Button, Container } from 'react-bootstrap'


function SignUp( {onLogin} ){
   

    const [email, setEmail] = useState ("")
    const [username, setUsername] =useState ("")
    const [password, setPassword] = useState ("")
    const [passwordConfirmation, setPasswordConfirmation] = useState ("")


    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }),
        })
            .then((r) => r.json())
            .then(onLogin)
    }


    return(
        <div>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3"
                controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    // id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3"
                controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Username"
                    // id="username"
                     value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="id">
                     <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    // id="id" 
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password_confirm">
                     <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" 
                    // id="password_confirm" 
                    value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        </div>
    )
}



export default SignUp