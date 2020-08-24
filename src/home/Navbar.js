import React, {useState} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Button} from 'reactstrap';
import '../App.css';


const Navigation = (props) => {

const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    
        return (
            <Navbar color="faded" light expand="md" className="navbar" >
                <NavbarBrand href="/" className="mr-auto navbarBrand" style={{color: 'red'}}  >My Book library</NavbarBrand>
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