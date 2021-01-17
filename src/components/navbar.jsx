import React from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  FormControl,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../pages/auth/auth";
import "./navbar.scss";

const MyNavbar = ({ username }) => {
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="px-1 py-1 px-md-4">
      {/* <Navbar.Brand href="#home">GLib</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-panel">
        <Nav className="mr-auto">
          <Link to="/" className="navbar-brand navbar-icon">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Link>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/count">Count</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          variant="outline-secondary"
          className="border-0"
          id="dropdown-custom-1"
          bsPrefix="btn"
        >
          <img
            src="https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg"
            alt="avatar"
            style={{
              objectFit: "cover",
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
            className="rounded-circle"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors mt-2 shadow" align="right">
          <Dropdown.Item eventKey="1" href="/profile">
            Profile
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            onClick={() => {
              dispatch(logoutAsync());
            }}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};

export default MyNavbar;
