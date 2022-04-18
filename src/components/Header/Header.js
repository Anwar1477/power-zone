import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../FireBase/Firebase.init";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  // console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });

    return () => unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="title">
          Power <span>Zone</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="link">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="link">
              Blogs
            </Nav.Link>
            {currentUser?.email ? (
              <button onClick={handleLogout} className="link">
                Logout
              </button>
            ) : (
              <Nav.Link as={Link} className="link" to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
