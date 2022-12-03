import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Reporte from "../../../../api/Reporte";

const StyledDiv = styled.div`
  @media only screen and (min-width: 1400px) {
    margin-bottom: 8rem;

    .margen {
      margin-bottom: 6rem;
    }

    .contenedor {
      width: 75%;
    }
  }

  @media only screen and (max-width: 1399px) {
    margin-bottom: 0;

    .margen {
      margin-bottom: 2rem;
    }

    .contenedor {
      width: auto;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 2.25rem;
  }

  button {
    color: #fff;
    background: #c25be9;
    border: 1px solid #c25be9;
    font-weight: 700;
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
    color: #fff;
    border: 1px solid #c25be9;
    text-shadow: 0 0 10px white;
  }
`;

const Ticket = () => {
  const datosDefault = {
    Correo: "",
    Nombre: "",
    Telefono: "",
    Asunto: "",
    Descripcion: "",
    Usuario_ID: sessionStorage.getItem("id"),
  };

  const navigate = useNavigate();
  const [datos, setDatos] = useState(datosDefault);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    if (e) {
      setDatos({ ...datos, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      Reporte.post(datos).then((response) => {
        console.log(response);
      });
      navigate("/support");
    }

    setValidated(true);
  };

  return (
    <StyledDiv>
      <Container fluid className="text-white p-2 p-lg-5 mb-5 mb-md-0">
        <Row className="mt-md-3 mt-4 mb-4 mb-md-5">
          <Col md="12" lg="5" className="text-center text-lg-start">
            <h2>Submit a Request</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="12">
            <Container className="bg-white text-dark p-5 rounded contenedor">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder=""
                    className="border-dark"
                    name="Correo"
                    value={datos.Correo}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa un correo válido.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder=""
                    className="border-dark"
                    name="Nombre"
                    type="text"
                    value={datos.Nombre}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa tu nombre.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    placeholder=""
                    className="border-dark"
                    name="Telefono"
                    type="tel"
                    value={datos.Telefono}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa tu teléfono.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    placeholder=""
                    className="border-dark"
                    type="text"
                    name="Asunto"
                    value={datos.Asunto}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingresa el asunto de la solicitud.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    placeholder=""
                    as="textarea"
                    rows={7}
                    className="border-dark"
                    name="Descripcion"
                    value={datos.Descripcion}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Describe tu solicitud.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Ticket;
