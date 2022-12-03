import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

const StyledDiv = styled.div`
  @media only screen and (min-width: 1400px) {
    margin-bottom: 8rem;
  }

  @media only screen and (max-width: 1399px) {
    margin-bottom: 0;
  }

  h2 {
    font-weight: 600;
    font-size: 2.25rem;
  }

  .boton {
    color: white;
    background: #5a6978;
    border: 1px solid #5a6978;
    appearance: none;
    font-weight: 700;
    text-decoration: none;
    vertical-align: middle !important;
    cursor: pointer !important;
    padding: 40px 50px !important;
    border-radius: 10px !important;
    white-space: normal;
    min-width: 205px;
    align-self: flex-start;
  }

  .boton:not([disabled]):active,
  .boton:not([disabled]):hover,
  .activo {
    background-color: #e6e6e6;
    background-size: 100%;
    box-shadow: 0 0 10px #5a6978, 0 0 10px #5a6978;
    color: #3a3a3a;
    border: 1px solid #e6e6e6;
    text-shadow: 0 0 10px white;
  }

  .list-group-item {
    padding: 25px;
  }
`;

const Questions = () => {
  return (
    <StyledDiv>
      <Container fluid className="text-white p-2 p-md-5 mb-5 mb-md-0">
        <Row className="mt-md-3 mt-4 mb-4 mb-md-5">
          <Col md="12" lg="5" className="text-center text-lg-start">
            <h2>Common Questions</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="6" className="ms-0 ms-lg-5">
            <ListGroup className="black">
              <ListGroup.Item>💳 Refund Policy</ListGroup.Item>
              <ListGroup.Item>🚫 Cancellation Policy</ListGroup.Item>
              <ListGroup.Item>🛡️ Warranty Services</ListGroup.Item>
              <ListGroup.Item>💲 Financing</ListGroup.Item>
              <ListGroup.Item>
                📦 How long will it take for for my PC to arrive?
              </ListGroup.Item>
              <ListGroup.Item>🌎 Do you ship internationally?</ListGroup.Item>
              <ListGroup.Item>
                🖥️ Do you setup and install Windows, drivers, etc?
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Questions;
