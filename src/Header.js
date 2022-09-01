import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="src/App.js" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="src/About.js" className="nav-link">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
