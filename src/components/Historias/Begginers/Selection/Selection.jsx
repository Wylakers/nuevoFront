import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  MdVideogameAsset,
  MdDesignServices,
  MdCode,
  MdOutlineLaptopMac,
  MdWork,
  MdCrop,
} from "react-icons/md";

const BsButton = styled(Button)`
  color: ${(props) => (props.primary ? "#fff" : "#3a3a3a")};
  background: ${(props) => (props.primary ? "#c25be9" : "#e6e6e6")};
  border: ${(props) =>
    props.primary ? "1px solid #c25be9" : "1px solid #e6e6e6"};
  font-weight: 700;
  text-decoration: none;
  vertical-align: middle !important;
  cursor: pointer !important;
  padding: 12px 20px !important;
  border-radius: 10px !important;
  white-space: normal;
  min-width: 250px;
  align-self: flex-start;

  &:not([disabled]):active,
  &:not([disabled]):hover {
    background-color: ${(props) => (props.primary ? "#c25be9" : "#e6e6e6")};
    background-size: 100%;
    box-shadow: ${(props) =>
      props.primary
        ? "0 0 10px #c25be9, 0 0 10px #c25be9"
        : "0 0 10px #e6e6e6, 0 0 10px #fff"};
    color: ${(props) => (props.primary ? "#fff" : "#3a3a3a")};
    border: ${(props) => (props.primary ? "#c25be9" : "1px solid #e6e6e6")};
    text-shadow: ${(props) =>
      props.primary ? "0 0 10px white" : "0 0 10px grey"};
  }
`;

const StyledDiv = styled.div`
  @media only screen and (min-width: 1400px) {
    margin-bottom: 5rem;

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
    padding: 12px 20px !important;
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

const Selection = () => {
  //useState para dar estilo al clickear a un tipo de uso
  const [activeTab, setActiveTab] = useState(0);
  //UseState para id de prearmado
  const [codigo, setCodigo] = useState(1);
  const navigate = useNavigate();
  // console.log(codigo);
  return (
    <StyledDiv>
      <Container fluid className="text-white p-5">
        <Row className="mt-md-3 mt-3 margen">
          <Col md="12" lg="5" className="text-center text-lg-start">
            <h2>What do you need?</h2>
          </Col>
          <Col md="12" lg="7" className="text-center text-lg-end">
            <BsButton
              className="me-sm-3 me-0 mb-2 text-center"
              onClick={() => {
                navigate("/");
              }}
            >
              &lt;Back
            </BsButton>

            <BsButton
              className="mb-2 text-center"
              primary="true"
              onClick={() => {
                navigate(`/begginers-build/${codigo}`);
              }}
            >
              Next
            </BsButton>
          </Col>
        </Row>

        <Row className="mt-md-5 mt-3">
          <Row>
            <Col className="text-center text-md-end mb-3 mb-md-5">
              <Button
                className={activeTab === 1 ? "boton activo" : "boton"}
                onClick={() => {
                  setActiveTab(1);
                  setCodigo(1);
                }}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <MdVideogameAsset size="8rem" />
                </div>
                <p>Gaming</p>
              </Button>
            </Col>
            <Col className="text-center mb-3 mb-md-5">
              <Button
                className={activeTab === 2 ? "boton activo" : "boton"}
                onClick={() => {
                  setActiveTab(2);
                  setCodigo(2);
                }}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <MdDesignServices size="8rem" />
                </div>
                <p>Design</p>
              </Button>
            </Col>
            <Col className="text-center text-md-start mb-3 mb-md-5">
              <Button
                className={activeTab === 3 ? "boton activo" : "boton"}
                onClick={() => {
                  setActiveTab(3);
                  setCodigo(3);
                }}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <MdCode size="8rem" />
                </div>
                <p>Coding</p>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-center text-md-end mb-3 mb-md-5">
              <Button
                className={activeTab === 4 ? "boton activo" : "boton"}
                onClick={() => {
                  setActiveTab(4);
                  setCodigo(2);
                }}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <MdOutlineLaptopMac size="8rem" />
                </div>
                <p>Rendering</p>
              </Button>
            </Col>
            <Col className="text-center mb-3 mb-md-5">
              <Button
                className={activeTab === 5 ? "boton activo" : "boton"}
                onClick={() => {
                  setActiveTab(5);
                  setCodigo(3);
                }}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <MdWork size="8rem" />
                </div>
                <p>Office</p>
              </Button>
            </Col>
            <Col className="text-center text-md-start mb-3 mb-md-5">
              <Button
                className={activeTab === 6 ? "boton activo" : "boton"}
                onClick={() => {
                  setActiveTab(6);
                  setCodigo(4);
                }}
              >
                <div className="mb-3 mb-md-3" style={{ maxHeight: "8rem" }}>
                  <MdCrop size="8rem" />
                </div>
                <p>Other</p>
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Selection;
