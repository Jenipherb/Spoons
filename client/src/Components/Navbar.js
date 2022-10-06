import { Dropdown, DropdownButton } from 'react-bootstrap'


function Navbar( {user, handleLogout} ){
    return(
        <div>
           <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button"href='/home'>Home</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleLogout}>Logout</Dropdown.Item>
          </DropdownButton>
        </div>
    )
}



export default Navbar