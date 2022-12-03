import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import PreArmadoApi from "../../../../api/PreArmado";

const BsButton = styled(Button)`
  color: ${(props) => (props.primary ? "#fff" : "#3a3a3a")};
  background: ${(props) => (props.primary ? "#c25be9" : "#e6e6e6")};
  border: ${(props) =>
    props.primary ? "1px solid #c25be9" : "1px solid #e6e6e6"};
  appearance: none;
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
  @media only screen and (min-width: 768px) {
    .header {
      margin-left: -10px;
    }
  }

  @media only screen and (max-width: 767px) {
    .case {
      height: 260px;
    }
    .header {
      margin-left: 0px;
    }
  }

  .divisor {
    background: #596978;
  }

  h1 {
    font-weight: 600;
  }

  .fondo {
    background: linear-gradient(
      176.07deg,
      #1d4778 40.1%,
      #04646f 56%,
      #175091 100%
    );
  }

  .list-group-item {
    border-radius: 0;
    border: none;
    border-bottom: 2px solid black;
    color: white;
    background: transparent;
  }

  .black {
    background: rgba(0, 0, 0, 0.2);
  }
  .bold {
    font-weight: 600;
  }
`;

const Optimized = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const resultado = await PreArmadoApi.getOne(id);
    setDatos(resultado.data.productos);
    console.log(resultado.data.productos);
  };

  return (
    <StyledDiv>
      <Container fluid className="text-white">
        {/* Top  */}
        <Row className="mt-md-5 mt-3 margen px-0 px-md-5 mb-5">
          <Col md="12" lg="5" className="text-center text-lg-start ">
            <h1>Your optimized build!</h1>
          </Col>
          <Col md="12" lg="7" className="text-center text-lg-end">
            <BsButton
              className="me-sm-3 me-0 mb-2 text-center"
              onClick={() => {
                navigate("/select-build");
              }}
            >
              &lt;Back
            </BsButton>
            <BsButton className="mb-2 text-center" primary="true">
              <Row>
                <Col xs="4" md="4" className="text-end">
                  <FaShoppingCart />
                </Col>
                <Col className="text-start">Checkout</Col>
              </Row>
            </BsButton>
          </Col>
        </Row>

        {/* Content */}
        <Row className="mb-0 mb-md-4">
          <Col
            className="ps-0 ps-md-5 pe-0 pe-md-5 text-center text-md-start"
            xs="12"
            md="auto"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0408/5792/7834/files/01_-_Main_-_Liquid_Cooled-removebg-preview.png"
              alt="Case de PC"
              className="case"
            />
          </Col>
          <Col className="pe-0 pe-md-4">
            <Row>
              <Col className="text-center text-md-start m-0">
                <h4 className="mb-4 header mt-3">Components</h4>
              </Col>
            </Row>
            {/* Lista de componentes */}
            <Row className="fondo mb-5 mb-md-0">
              {datos.map((item) => (
                <Col md="12" lg="6" className="black">
                  <ListGroup>
                    <ListGroup.Item key={item.Producto_ID}>
                      <Row className="d-flex align-items-center">
                        <Col xs="2" md="auto">
                          <img src={item.Imagen} alt={item.Nombre} />
                        </Col>
                        <Col xs="7" md="6">
                          {item.Nombre}
                        </Col>
                        <Col className="text-end bold">${item.Precio}</Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        {/* Bottom part */}
        <Row className="ps-md-5 mb-5 px-5">
          <Col xs="12" md="5" lg="4" className="d-flex divisor px-4 py-3 ">
            <Col className="text-end">
              <Row>
                <Col className="mb-2">Components price</Col>
              </Row>
              <Row>
                <Col className="fs-5" style={{ fontWeight: "600" }}>
                  {/* Método reduce ejecuta: (callback, valorInicial) */}$
                  {datos.reduce((a, v) => (a = a + v.Precio), 0)}
                </Col>
              </Row>
            </Col>
            <Col className="text-end">
              <Row>
                <Col className="mb-2">Build fee</Col>
              </Row>
              <Row>
                <Col className="fs-5" style={{ fontWeight: "600" }}>
                  $99
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Optimized;
