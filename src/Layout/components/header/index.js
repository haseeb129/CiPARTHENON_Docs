import React from "react";
import "./header.css";
import Logo from "../../../assests/OnlyLogo.png";
import { Navbar, Nav, NavLink, FormControl, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header({ handleSearch, searchResults, onOptionSelect, searchValue }) {
  return (
    <Navbar collapseOnSelect expand="md" className="navbar-wrapper">
      <Navbar.Brand href="/">
        <img src={Logo} className="d-inline-block align-top brand-image" />
        ciPARTHENON Docs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer
            to="/documentation"
            activeClassName="navlink-active-class"
          >
            <NavLink className="navlink">Documentation</NavLink>
          </LinkContainer>

          <LinkContainer to="/faq" activeClassName="navlink-active-class">
            <NavLink className="navlink">FAQ</NavLink>
          </LinkContainer>
        </Nav>
        <Form className="">
          <FormControl
            placeholder="Search"
            className="mr-2 search-bar"
            aria-label="Search"
            onChange={handleSearch}
            value={searchValue}
            onKeyPress={(e) => {
              if (e.key == "Enter") e.preventDefault();
            }}
          />
          <div className="suggestion-box">
            {searchResults.map((element, index) => {
              return (
                <div
                  className="suggestion-box-inner"
                  key={index}
                  onClick={() => onOptionSelect(element)}
                  onKeyDown={(e) => console.log("this is Div key down", e)}
                >
                  {element.title}
                </div>
              );
            })}
          </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
