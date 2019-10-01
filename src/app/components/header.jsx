import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

// <Form inline>
//   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//   <Button variant="outline-success">Search</Button>
// </Form>

class Header extends React.Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">Consulting</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="/">Home</Nav.Link>
			      <Nav.Link href="/services">Services</Nav.Link>
			      <Nav.Link href="/info">What We Do</Nav.Link>
			      <Nav.Link href="/about">About Me</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
