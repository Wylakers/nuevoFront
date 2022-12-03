import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import imagen from "../../../images/404.png";

const BsButton = styled(Button)`
  color: #fff;
  background: #c25be9;
  border: 1px solid #c25be9;
  font-weight: 700;
  vertical-align: middle !important;
  cursor: pointer !important;
  padding: 18px 20px !important;
  border-radius: 10px !important;
  white-space: normal;
  line-height: 1.2;
  font-size: 18px;
  letter-spacing: 0.1em;
  min-width: 260px;

  &:not([disabled]):active,
  &:not([disabled]):hover {
    background-color: #c25be9;
    background-size: 100%;
    box-shadow: 0 0 10px #c25be9, 0 0 10px #c25be9;
    color: #fff;
    border: 1px solid #c25be9;
    text-shadow: 0 0 10px white;
  }
`;

const StyledDiv = styled.div`
  @media only screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 3rem;

    img {
      height: 250px;
    }
  }
`;

const NotFoundError = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <Container fluid className="text-white">
        <Row>
          <Col className="text-center mb-2 mt-3 mt-md-0">
            <img src={imagen} alt="404 logo" height="550px" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-0 mb-md-2">
            <h1
              className="fst-italic  mb-4 fw-600"
              style={{ fontFamily: "Evogria, sans-serif" }}
            >
              Esta página no existe.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-2 mb-md-4">
            <p>La página que estás buscando no existe o ha sido removida.</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <BsButton
              className="mb-2 text-center"
              onClick={() => navigate("/")}
            >
              SIGUE COMPRANDO {""}
              <BsArrowRight />
            </BsButton>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default NotFoundError;
