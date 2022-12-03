import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import Usuarios from "../../../api/Usuario";

const Newdiv = styled.div`
  @media only screen and (min-width: 768px) {
    form {
      width: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    form {
      width: auto;
    }
  }
`;

const StyledDiv = styled.div`
  button {
    background-color: #e6e6e6;
    color: #3a3a3a;
    font: inherit;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    height: 3.5rem;
  }

  button:not([disabled]):active,
  button:not([disabled]):hover {
    background-color: #e6e6e6;
    background-size: 100%;
    box-shadow: 0 0 10px #e6e6e6, 0 0 10px #fff;
    color: #3a3a3a;
    border: 1px solid #e6e6e6;
    text-shadow: 0 0 10px white;
  }
`;

const CreateAccount = () => {
  const defaultUser = {
    Nombre: "",
    Apellido: "",
    Correo: "",
    Password: "",
  };

  /* Validación de datos*/
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState(defaultUser);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e) {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      Usuarios.post(userData).then((response) => {
        console.log(response);
      });
      navigate("/login");
    }
    setValidated(true);
  };

  return (
    <Newdiv>
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="p-4 rounded "
          style={{
            background:
              "linear-gradient(90deg, rgba(27,15,51,1) 20%, rgba(41,24,95,1) 100%)",
          }}
        >
          <h1
            className="fst-italic text-white mb-4"
            style={{ fontFamily: "Evogria, sans-serif" }}
          >
            Create Account
          </h1>

          <FloatingLabel
            className="mb-4 text-muted"
            controlId="formFirstname"
            label="First Name"
          >
            <Form.Control
              type="text"
              placeholder="First Name"
              className="bg-transparent text-white"
              required
              name="Nombre"
              value={userData.Nombre}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese su nombre
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            className="mb-4 text-muted"
            controlId="formLastname"
            label="Last Name"
          >
            <Form.Control
              type="text"
              placeholder="Last Name"
              className="bg-transparent text-white"
              required
              name="Apellido"
              value={userData.Apellido}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese su apellido
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel className="mb-4 text-muted" label="Email">
            <Form.Control
              type="email"
              placeholder="Email"
              className="bg-transparent text-white"
              required
              name="Correo"
              value={userData.Correo}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un correo válido
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel
            className="mb-4 text-muted"
            controlId="formPassword"
            label="Password"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              className="bg-transparent text-white"
              pattern=".{8,}"
              required
              name="Password"
              value={userData.Password}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              La contraseña debe tener más de 8 caracteres.
            </Form.Control.Feedback>
          </FloatingLabel>

          <StyledDiv className="d-grid text-decoration-none">
            <Button size="lg" type="submit">
              CREATE
            </Button>
          </StyledDiv>
        </Form>
      </Container>
    </Newdiv>
  );
};

export default CreateAccount;
