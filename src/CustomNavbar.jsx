import React from "react";
import {Link} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/logo192.png";
import { Cart3 } from "react-bootstrap-icons";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function CustomNavbar() {
  const logout = () => {
    //remover la cookie
    cookies.remove("TOKEN", { path: "/" });
    //redireccionar el usuario a la pagina principal
    window.location.href = "/";
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
        <Link to="/"><img className="logo" src={logo} alt="logo-react" /></Link>
        <Navbar.Brand className="navbar-title-brand" href="/">
          React-Auth
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/free">Usuarios</Link>
            <Link to="/auth">Ruta Privada</Link>
            <Link type="submit" variant="danger" onClick={() => logout()}>
              Logout
            </Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      <a href="#!" className="ciudad text-light">Santiago</a>  
      <Cart3 className="shopping-cart" color="white" size={25} />
      </Container>
    </Navbar>
  );
}
