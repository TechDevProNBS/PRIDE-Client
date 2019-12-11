import React from 'react';
import { Navbar, Nav,  } from 'react-bootstrap';

const NavBar = (props) => {
    return (
        <Navbar style={{ zIndex: "1007", position: "fixed", width: "100%", minHeight: "70px" }} bg="Grey" variant="lightGrey" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000">Login</Nav.Link>
                    <Nav.Link href="http://localhost:3000/PRIDEWall">Pride Wall</Nav.Link>
                    <Nav.Link href="http://localhost:3000/CreateCard">Send a PRIDE card</Nav.Link>
                    <Nav.Link href="http://localhost:3000/MyPRIDEWall">MyPRIDE</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBar;