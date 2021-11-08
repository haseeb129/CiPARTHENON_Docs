import React from "react";
import "./header.css";
import Logo from "../../../assests/OnlyLogo.png";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, Redirect, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  console.log("path", history);
  console.log("pathname", history?.location?.pathname?.split("/")[1]);
  return (
    <Navbar collapseOnSelect expand="md" className="navbar-wrapper">
      <Navbar.Brand href="/">
        <img src={Logo} className="d-inline-block align-top brand-image" />
        ciPARTHENON Docs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="ml-auto"
          activeKey={history?.location?.pathname?.split("/")[1]}
        >
          <LinkContainer to="/documentation/GettingStarted">
            <NavLink
              className="navlink"
              eventKey="documentation"
              // active={"navlink-active-class"}
            >
              Documentation
            </NavLink>
          </LinkContainer>

          <LinkContainer to="/tutorials">
            <NavLink className="navlink">Tutorials</NavLink>
          </LinkContainer>

          <LinkContainer to="/apireference">
            <NavLink className="navlink">API Reference</NavLink>
          </LinkContainer>

          <LinkContainer to="/faq">
            <NavLink className="navlink" eventKey="faq">
              FAQ
            </NavLink>
          </LinkContainer>

          <LinkContainer to="/releasenotes">
            <NavLink className="navlink">Release Notes</NavLink>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
