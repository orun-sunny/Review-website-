import React from "react";
import {
  Container, Nav,
  Navbar as Appbar,
  Stack
} from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <Appbar bg="light" expand="lg">
      <Container className="navbar-here" fluid>
        <div className="foter-phone-icon">
          <FontAwesomeIcon icon={faBook} />
        </div>
        <Appbar.Brand className="p-3 online" href="#"> Online Edu</Appbar.Brand>
        <Appbar.Toggle aria-controls="navbarScroll" />
        <Appbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Stack direction="horizontal" gap={5}>
              <NavLink
                to="/home"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Home
              </NavLink>
              <NavLink style={{ textDecoration: 'none' }}
                to="/Instructors"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Instructors

              </NavLink>
              <NavLink style={{ textDecoration: 'none' }}
                to="/home"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Contact us

              </NavLink>
              <NavLink style={{ textDecoration: 'none' }}
                to="*"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                About us

              </NavLink>

              {/* <NavLink to="/about" className="items"
                activeStyle={{
                  textDecoration: 'none',
                  fontWeight: "bold",
                  color: "black",
                }}>
                <li style={{ textDecoration: 'none' }} >About us</li>
              </NavLink>
              <NavLink to="contact" className="items">
                <li>Contact us</li>
              </NavLink> */}
            </Stack>
          </Nav>

        </Appbar.Collapse>
      </Container>
    </Appbar >
  );
};

export default Navbar;
