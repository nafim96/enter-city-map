import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  const linkStyle = { padding: "10px", margin: "10px", color: "white" };

  return (
    <Navbar expand="lg">
      <Navbar.Brand className="text-white">
        <Link to="/home">
          <h1 className="main-logo">Enter City Map</h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-success" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link style={linkStyle} to="/home">
            Home
          </Link>
          <Link style={linkStyle} to="/destination/1">
            Destination
          </Link>
          {loggedInUser.email ? (
            <Link style={linkStyle} to="/Profile">
              {loggedInUser.name || loggedInUser.displayName}'s Profile
            </Link>
          ) : (
            <Link style={linkStyle} to="/login">
              Login
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
