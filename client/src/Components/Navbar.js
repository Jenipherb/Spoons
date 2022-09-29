import { Container} from 'react-bootstrap'


function Navbar( {user, handleLogout, setSpoonAmount} ){
    return(
        <div>
            <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Spoon Full of Sugar</Navbar.Brand>
          </Container>
        </Navbar>
        </div>
    )
}



export default Navbar