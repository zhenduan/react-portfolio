import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpeg'


export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block mx-2"
                />{' '}
                Zhen Duan
    </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>  <Link className="nav-link" to="/">Home</Link></Nav.Link>
                    <Nav.Link>  <Link className="nav-link" to="/projects">Projects</Link></Nav.Link>
                    <Nav.Link>  <Link className="nav-link" to="/aboutme">About Me</Link></Nav.Link>
                    <Nav.Link>  <Link className="nav-link" to="/contact">Contact</Link></Nav.Link>


                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
