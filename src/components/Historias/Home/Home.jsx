import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  @media only screen and (min-width: 768px) {
    margin-bottom: 10rem;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 5rem;
    text-align: center;
  }

  .bordeArriba {
    border-top: 1px solid black;
  }

  button {
    color: #fff !important;
    background: #c25be9 !important;
    border: 1px solid #c25be9 !important;
    background-position: center !important;
    transition: background 0.3s !important;
    appearance: none;
    text-decoration: none;
    vertical-align: middle !important;
    cursor: pointer !important;
    padding: 12px 20px !important;
    border-radius: 10px !important;
    white-space: normal;
    min-width: 250px;
    align-self: flex-start;
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
  h1 {
    margin-bottom: 0;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv className="">
      <Container className="mb-5 ms-0 ms-md-5 mt-5 mt-md-0" fluid>
        <div>
          <FaGamepad size="15rem" color="white" className="ms-md-3 mt-n5" />
        </div>
        <Row>
          <h1 className="text-white fw-semibold mb-4 ">Build your PC!</h1>
        </Row>
        <Row>
          <p className="text-white fs-4 fw-light mb-4">
            Just for what you need
          </p>
        </Row>
        <div className="mt-2">
          <Button
            className="me-md-3 me-1 mb-2 text-md-start text-center"
            onClick={() => {
              navigate("/select-build");
            }}
          >
            Build for begginers
          </Button>

          <Button
            className="mb-2 text-md-start text-center"
            onClick={() => {
              navigate("/advanced-build");
            }}
          >
            Advanced building
          </Button>
        </div>
      </Container>
    </StyledDiv>
  );
};

export default Home;
