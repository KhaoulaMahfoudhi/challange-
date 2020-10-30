import React from 'react'
import{ Navbar, Nav, Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const NavBare = ({isAuth,login, logout}) => {
    return (
       <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Users API</Navbar.Brand>
    <Nav className="mr-auto">
      <Link className="app-link" to ="/">Home</Link>
      <Link className="app-link" to="/userList">Users</Link>
      <Link className="admin-link" to="/admin">Admin</Link>
    </Nav>
    <Form inline>
    <Button onClick={isAuth ? logout : login} variant="primary">{isAuth ? "Logout" : "Login"}</Button>
    </Form>
      
    </Navbar>
       </div> 
    
        
    )
}

export default NavBare
