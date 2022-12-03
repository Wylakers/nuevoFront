import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import { LoginContext } from "../../../Helper/Context";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaGamepad } from "react-icons/fa";

const Newdiv = styled.div`
  @media only screen and (min-width: 577px) {
    .nav-link {
      border-bottom: none;
    }
  }

  @media only screen and (max-width: 575px) {
    .navbar {
      background: #242424;
      text-align: center;
    }

    .nav-link {
      color: white;
      font-weight: 500;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      border-bottom: 0.5px solid white;
    }

    .visible {
      margin-left: 1.5rem;
    }

    .bordeBottom {
      padding-bottom: 1rem;
    }

    .noBorde {
      border-bottom: none;
    }
  }
`;

const Header = ({ isHome }) => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <Newdiv>
      <Navbar collapseOnSelect expand="sm" variant="dark" className="p-0">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            <FaGamepad
              size="3rem"
              className={isHome ? "invisible" : "visible"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="ms-lg-2 ">
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/support"} className="ms-lg-2">
                Support
              </Nav.Link>
              <NavDropdown
                title="Reviews"
                id="collasible-nav-dropdown"
                className="ms-lg-2"
              >
                <NavDropdown.Item as={Link} to={"/user-reviews"}>
                  Usuarios
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/influencer-reviews"}>
                  Influencers
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Ranking"
                id="collasible-nav-dropdown"
                className="ms-lg-2 mb-3 mb-md-auto"
              >
                <NavDropdown.Item as={Link} to={"/best-perifecs"}>
                  Periferics
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/ranking-build"}>
                  Builds
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="d-flex flex-row justify-content-between bordeBottom">
              <Nav.Link as={Link} to={"/"} className="noBorde">
                <FaSearch color="white" size="1.5em " />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={loggedIn ? "/account" : "/login"}
                className="ms-lg-2 noBorde"
              >
                <FaUser color="white" size="1.5em" />
              </Nav.Link>
              <Nav.Link as={Link} to={"/"} className="ms-lg-2 noBorde">
                <FaShoppingCart color="white" size="1.5em" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Newdiv>
  );
};

export default Header;
