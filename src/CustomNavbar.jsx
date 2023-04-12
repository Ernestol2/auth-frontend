import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from './img/logo192.png'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function CustomNavbar() {

  const logout = () => {
    //remover la cookie
    cookies.remove("TOKEN", { path: "/" });
    //redireccionar el usuario a la pagina principal
    window.location.href = "/"
  };

  return (
    <Navbar
      collapseOnSelect
      className="font-weight-bold"
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">
        <img
          className="logo" 
          src={logo} 
          alt="logo-react" />{" "}
        React-Auth</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/free">Usuarios</Nav.Link>
            <Nav.Link href="/auth">Ruta Privada</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link 
              type='submit' 
              variant='danger'
              onClick={() => logout()}
            >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
