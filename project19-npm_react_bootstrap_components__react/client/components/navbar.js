import React from 'react';
import { Navbar, Nav, NavItem, Header, Brand, NavDropdown, MenuItem, collapseOnSelect, Collapse, Toggle } from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Brand Name</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventkey={1} href="#">Link 1</NavItem>
                    <NavItem eventkey={2} href="#">Link 2</NavItem>
                    <NavDropdown eventkey={3} title="Link 3 (dropdown)" id="basic-nav-dropdown">
                        <MenuItem eventkey={3.1}>Action</MenuItem>
                        <MenuItem eventkey={3.2}>Another action</MenuItem>
                        <MenuItem eventkey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventkey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <Navbar.Toggle>
                    </Navbar.Toggle>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;