import { Button, Nav } from 'react-bootstrap'


function Navbar( {user, handleLogout} ){
    return(
        <div>
          <Nav variant="pills" defaultActiveKey="/me">
            <Nav.Item>
              <Navbar.Link href="/home">Spoon Full of Sugar</Navbar.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/task-added">New Task</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/profile">Profile</Nav.Link>  
            </Nav.Item>  
            <Button onClick={handleLogout}> </Button>
          </Nav>
        </div>
    )
}



export default Navbar