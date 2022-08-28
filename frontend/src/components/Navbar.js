import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/havit.png';
import { handleClose, handleOpen } from '../actions/sidebar_actions'
import { connect, useDispatch, useSelector } from 'react-redux'


const Navbarg = () => {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.ui.Sidebar.visible);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#"><img
              src={Logo}
              height="30"
              className="d-inline-block align-top"
              alt="Havit logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!visible ?
            <button onClick={() => dispatch(handleOpen())} type="button" class="btn btn-light">Open</button> :
            <button onClick={() => dispatch(handleClose())} type="button" class="btn btn-info">Close</button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = state => {
  return {
    visible: state.ui.Sidebar.visible
  }
}

export default connect(mapStateToProps, null)(Navbarg);