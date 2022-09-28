import { useState } from "react"
import { Form, Button } from 'react-bootstrap'


function SignUp(Login){

    const [email, setEmail] = useState ("")
    const [username, setUsername] =useState ("")
    const [password, setPassword] = useState ("")
    const [passwordConfirmation, setPasswordConfirmation] = useState ("")


    function handleSubmit(e) {
        e.preventDefault()
        fetch()
    }


    return(
        <div>
            <Form>
                <Form.Group className="mb-3"
                controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3"
                controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="username" placeholder="Username"
                    id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    id="id" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="confirm password" placeholder="Confirm Password" 
                    id="password_confirm" value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}



export default SignUp