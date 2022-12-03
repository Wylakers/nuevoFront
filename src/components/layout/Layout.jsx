import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ main, isHome }) => (
  <Container className="px-0 overflow-hidden" fluid>
    <Row>
      <Col>
        <Header isHome={isHome}></Header>
      </Col>
    </Row>
    <Row>
      <Col>{main}</Col>
    </Row>
    <Row>
      <Col>
        <Footer />
      </Col>
    </Row>
  </Container>
);

export default Layout;
