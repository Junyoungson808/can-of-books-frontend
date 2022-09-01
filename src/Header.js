import React from 'react';
import { Container, Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem style={{color: 'whitesmoke'}}><Link to="src/App.js" className="nav-link"> Home__ </Link></NavItem>
        <NavItem style={{color: 'whitesmoke'}}><Link to="src/About.js" className="nav-link"> __About </Link></NavItem>
      </Navbar>

    )
  }
}

export default Header;
