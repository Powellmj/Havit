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
            {!visible ?
            <Navbar.Toggle onClick={() => dispatch(handleOpen())} aria-controls="responsive-navbar-nav" /> :
            <Navbar.Toggle onClick={() => dispatch(handleClose())} aria-controls="responsive-navbar-nav" /> }
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