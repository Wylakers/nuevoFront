import React, { useContext, useState } from "react";
import { LoginContext } from "../../../Helper/Context";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdDataSaverOff } from "react-icons/md";
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

const LogIn = () => {
  const defaultLogin = {
    Correo: "",
    Password: "",
  };

  /* Validación de datos*/
  const [validated, setValidated] = useState(false);
  const [inputData, setInputData] = useState(defaultLogin);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e) {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    event.preventDefault();
    //   event.stopPropagation();
    // } else {
    Usuarios.login(inputData).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        console.log(response.data);
        //Guardar id de persona en SessionStorage
        sessionStorage.setItem("id", response.data);
        console.log(sessionStorage.getItem("id"));
        navigate("/");
      }
    });
    // }
    // setValidated(true);
  };

  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <Newdiv>
      <Container
        className="mb-5 mb-md-4 mt-5 mt-md-0 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Form
          className="p-4 rounded"
          style={{
            background:
              "linear-gradient(90deg, rgba(27,15,51,1) 20%, rgba(41,24,95,1) 100%)",
          }}
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <h1
            className="fst-italic text-white mb-4"
            style={{ fontFamily: "Evogria, sans-serif" }}
            aria-describedby="loginHeading"
          >
            Log in.
          </h1>

          <p className="mb-4 text-white">
            Log in with your details below to view your order.
          </p>

          <FloatingLabel
            className="mb-4 text-muted"
            controlId="formEmail"
            label="Email"
          >
            <Form.Control
              type="email"
              placeholder="Email"
              className="bg-transparent text-white"
              required
              name="Correo"
              value={inputData.Correo}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un correo válido.
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
              value={inputData.Password}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              La contraseña debe tener más de 8 caracteres.
            </Form.Control.Feedback>
          </FloatingLabel>

          <StyledDiv className="d-grid mb-3">
            <Button size="lg" type="submit" onClick={() => setLoggedIn(true)}>
              LOGIN
            </Button>
          </StyledDiv>

          <Link className="color text-decoration-none text-white">
            Forgot your password?
          </Link>
          <hr />
          <hr />
          <p
            className="text-white mb-3 mt-5"
            style={{
              fontWeight: "700",
              fontSize: "1.115em",
            }}
          >
            Don’t have an account?
          </p>
          <StyledDiv
            className="d-grid mb-2 text-decoration-none"
            as={Link}
            to="/register"
          >
            <Button size="lg">SIGN UP</Button>
          </StyledDiv>
        </Form>
      </Container>
    </Newdiv>
  );
};

export default LogIn;
