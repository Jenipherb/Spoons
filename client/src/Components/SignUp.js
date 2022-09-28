import { useState } from "react"
import Form from 'react-bootstrap/Form'


function SignUp(Login){

    const [email, setEmail] = useState ("")
    const [username, setUsername] =useState ("")
    const [password, setPassword] = useState ("")
    const [passwordConfirmation, setPasswordConfirmation] = useState ("")

    return(
        <div>
            <Form>
                <Form.Group className="mb-3"
                controlId="formBasicEmail"></Form.Group>
            </Form>
        </div>
    )
}



export default SignUp