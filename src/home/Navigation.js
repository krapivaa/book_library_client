import React, {useState} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Button} from 'reactstrap';
import '../App.css';


import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from 'react-router-dom';


const Navigation = (props) => {

const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    
        return (
            <Navbar light expand="md" className="navbar" >
                <NavbarBrand href="/" className="mr-auto navbarBrand" style={{color: 'dark-green'}}><h2>My library</h2></NavbarBrand>

                <Link to='/secondpage' style={{float: "right", marginRight: '20px', padding: '10px', color: 'black'}}><h6>About</h6></Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            {props.token ?  
                            <Button onClick={props.clickLogout}>Logout</Button> : null} 
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        )
    }

export default Navigation;