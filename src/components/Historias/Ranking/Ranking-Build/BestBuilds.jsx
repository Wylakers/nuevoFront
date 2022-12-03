import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";

import PreArmadoApi from "../../../../api/PreArmado";

const StyledDiv = styled.div`
  @media only screen and (min-width: 768px) {
    margin-bottom: 10rem;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 3rem;
  }

  .list-group-item {
    border-radius: 0;
    border: none;
    border-bottom: 2px solid black;
    color: white;
    background: transparent;
  }

  .fondo {
    background: linear-gradient(
      176.07deg,
      #1d4778 40.1%,
      #04646f 56%,
      #175091 100%
    );
  }

  .accordion-body {
    padding: 0;
  }

  .accordion-item {
    border: none;
    background-color: transparent;
  }

  .black {
    background: rgba(0, 0, 0, 0.2);
  }

  .bold {
    font-weight: 600;
  }

  .collapsing {
    transition-delay: 0.2s;
    transition: height 0.3s ease;
  }
`;

const BestBuilds = () => {
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    handleApiData();
  }, []);

  const handleApiData = async () => {
    const resultado = await PreArmadoApi.getAll();
    setBuilds(resultado.data);
    console.log(resultado.data);
  };

  return (
    <StyledDiv>
      <Container fluid className="mt-5 ms-0 ms-md-5">
        <h3 className="text-white mb-4 text-center text-sm-start">
          Ranking best seller builds
        </h3>
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <Accordion>
              {builds.map((item) => {
                const { Pre_Armado_ID, Nombre, productos } = item;
                return (
                  <Accordion.Item eventKey={Pre_Armado_ID} className="mb-2">
                    <Accordion.Header>
                      <Col className="d-none d-sm-block" xs="2" md="2">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0408/5792/7834/files/01_-_Main_-_Liquid_Cooled-removebg-preview.png?width=60&height=60"
                          alt="Case de PC"
                        />
                      </Col>
                      <Col className="fs-5">{Nombre}</Col>
                      <Col
                        className="text-center"
                        style={{ fontWeight: "700" }}
                      >
                        ${productos.reduce((a, v) => (a = a + v.Precio), 0)}
                      </Col>
                    </Accordion.Header>
                    <Accordion.Body className="fondo rounded">
                      {productos.map((producto) => (
                        <ListGroup className="black">
                          <ListGroup.Item>
                            <Row className="d-flex align-items-center">
                              <Col xs="2" md="auto">
                                <img
                                  src={producto.Imagen}
                                  alt={producto.Nombre}
                                />
                              </Col>
                              <Col xs="7" md="6">
                                {producto.Nombre}
                              </Col>
                              <Col className="text-end bold">
                                ${producto.Precio}
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        </ListGroup>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default BestBuilds;
