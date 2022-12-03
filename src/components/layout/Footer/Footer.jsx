import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const StyledDiv = styled.div`
  footer {
    background-image: url(https://cdn.shopify.com/s/files/1/0408/5792/7834/files/Footer_Background_1920x.jpg?v=1614336455);
    background-size: cover;
    background-repeat: no-repeat;
  }

  p {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 1.25em;
  }

  button {
    color: #fff !important;
    background: #c25be9 !important;
    border: 1px solid #c25be9 !important;
    background-position: center !important;
    transition: background 0.3s !important;
    appearance: none;
    text-decoration: none;
    text-align: center !important;
    vertical-align: middle !important;
    cursor: pointer !important;
    font-size: 18px !important;
    letter-spacing: 0.1em !important;
    padding: 18px 20px !important;
    border-radius: 10px !important;
    margin-left: 10px !important;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 700;
    line-height: 1;
    white-space: normal;
    align-self: flex-end;
    height: auto;
  }

  button:not([disabled]):active,
  button:not([disabled]):hover {
    background-color: #c25be9;
    background-size: 100%;
    box-shadow: 0 0 10px #c25be9, 0 0 10px #c25be9;
    color: #3a3a3a;
    border: 1px solid #e6e6e6;
    text-shadow: 0 0 10px white;
  }
`;

const Footer = () => {
  return (
    <StyledDiv>
      <footer className="text-white py-4 bg-dark">
        <Container fluid className="mt-md-2 mt-sm-0">
          <Row className="mb-5">
            <Col xs="12" md="6" className="mb-0 mb-md-5">
              <p className="mb-sm-3 mb-md-5 text-md-start text-center">
                Sign up to our newsletter for the latest PC news.
              </p>

              <div className="d-flex justify-content-md-start justify-content-center flex-wrap">
                <FloatingLabel
                  className="mb-5 text-muted w-75 d-flex flex-wrap flex-sm-nowrap justify-content-center"
                  controlId="formEmail"
                  label="Email"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="bg-transparent text-white mb-2 mb-sm-0"
                  />

                  <Button type="submit" className="d-flex">
                    SUBSCRIBE
                  </Button>
                </FloatingLabel>
              </div>
              <div className="d-flex gap-5 mb-md-0 mb-5 justify-content-md-start justify-content-center">
                <FaFacebookF size="1.5rem" />
                <FaTwitter size="1.5rem" />
                <FaInstagram size="1.5rem" />
              </div>
            </Col>
            <Col xs="12" md="2" className="text-md-start text-center">
              <ul className="list-unstyled">
                <li className="mb-4">Build Your PC</li>
                <li className="mb-4">Why Redux</li>
                <li className="mb-md-0 mb-5">Support</li>
              </ul>
            </Col>
            <Col xs="12" md="2" className="text-md-start text-center">
              <ul className="list-unstyled">
                <li className="mb-4">Good.</li>
                <li className="mb-4">Better.</li>
                <li className="mb-md-0 mb-5">Best.</li>
              </ul>
            </Col>
            <Col xs="12" md="2" className="text-md-start text-center">
              <ul className="list-unstyled">
                <li className="mb-4">Terms & Conditions</li>
                <li className="mb-4">Privacy Policy</li>
                <li>Refund Policy</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="d-grid mt-3">
              <small className="text-center">
                Copyright © 2022{" "}
                <Link to="/" className="text-decoration-none text-white">
                  Build Redux
                </Link>
                . All Rights Reserved.
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </StyledDiv>
  );
};

export default Footer;
