import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaBook, FaRegQuestionCircle, FaTicketAlt } from "react-icons/fa";

const StyledDiv = styled.div`
  @media only screen and (min-width: 1400px) {
    margin-bottom: 8rem;

    .margen {
      margin-bottom: 6rem;
    }
  }

  @media only screen and (max-width: 1399px) {
    margin-bottom: 0;

    .margen {
      margin-bottom: 2rem;
    }
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
`;

const SupportHub = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <Container fluid className="text-white p-5">
        <Row className="mt-md-3 mt-3 margen">
          <Col md="12" lg="5" className="text-center text-lg-start">
            <h2>Support Hub</h2>
          </Col>
        </Row>

        <Row className="mt-md-5 mt-3">
          <Row>
            <Col className="text-center text-md-end mb-3 mb-md-5">
              <Button
                className="boton"
                onClick={() => navigate("/support-guides")}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <FaBook size="8rem" />
                </div>
                <p>Guides</p>
              </Button>
            </Col>
            <Col className="text-center mb-3 mb-md-5">
              <Button
                className="boton"
                onClick={() => navigate("/support-questions")}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <FaRegQuestionCircle size="8rem" />
                </div>
                <p>FAQ</p>
              </Button>
            </Col>
            <Col className="text-center text-md-start mb-3 mb-md-5">
              <Button
                className="boton"
                onClick={() => navigate("/support-ticket")}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <FaTicketAlt size="8rem" />
                </div>
                <p>Submit Ticket</p>
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default SupportHub;
