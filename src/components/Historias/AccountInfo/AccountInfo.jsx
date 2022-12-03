import React, { useState, useContext } from "react";
import { LoginContext } from "../../../Helper/Context";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { Country } from "country-state-city";
import { useNavigate } from "react-router-dom";
import Usuario from "../../../api/Usuario";
import Detalle from "../../../api/DetalleUsuario";
import co1 from "./images/co1.jpg";
import memo1 from "./images/memo1.jpg";
import pro03 from "./images/pro03.jpg";
import win3 from "./images/win3.jpg";
import case01 from "./images/case01.jpg";
import sto1 from "./images/sto1.jpg";
import pow1 from "./images/pow1.jpg";
import placa01 from "./images/placa01.jpg";

const StyledDiv = styled.div`
  margin-bottom: 10rem;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    color: #3a3a3a;
    box-sizing: border-box;
    list-style: none;
  }

  li button {
    font-size: 16px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8;
    list-style: none;
    box-sizing: border-box;
    color: inherit;
    background-color: #f0f0f0;
    transition: all 0.3s ease;
    width: 100%;
    padding: 12px;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  li button:not([disabled]):active,
  li button:not([disabled]):hover,
  .activo {
    background-color: white;
    border-left: 9px solid #c25be9;
    color: #d93e4d;
  }

  .boton {
    color: #fff !important;
    background: #c25be9 !important;
    border: 1px solid #c25be9 !important;
    background-position: center !important;
    transition: background 0.3s !important;
    appearance: none;
    text-decoration: none;
    text-align: center !important;
    vertical-align: middle !important;
    cursor: pointer !important;
    font-size: 18px !important;
    padding: 12px 20px !important;
    border-radius: 10px !important;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 700;
    line-height: 1;
    white-space: normal;
    min-width: 250px;
    align-self: flex-end;
    height: auto;
  }

  .boton:not([disabled]):active,
  .boton:not([disabled]):hover {
    background-color: #c25be9;
    background-size: 100%;
    box-shadow: 0 0 5px #c25be9, 0 0 5px #c25be9;
    color: #3a3a3a;
    border: 1px solid #e6e6e6;
    text-shadow: 0 0 10px white;
  }

  .form-control,
  .form-select {
    padding: 14px 20px;
    font-size: 16px;
  }

  @media only screen and (min-width: 768px) {
    .bordeDerecho {
      border-right: 1px solid black;
    }
  }

  @media only screen and (max-width: 768px) {
    .bordeDerecho {
      border: none;
    }

    .bordeArriba {
      border-top: 1px solid black;
    }
  }
`;

const AccountInfo = () => {
  const defaultUser = {
    Nombre: "",
    Apellido: "",
    Correo: "",
  };

  const defaultDetalle = {
    Direccion: "",
    Departamento: "",
    Ciudad: "",
    Codigo_postal: "",
    Telefono: 0,
  };

  const [activeTab, setActiveTab] = useState("profile");

  const [userData, setUserData] = useState(defaultUser);
  const [datos, setDatos] = useState(defaultDetalle);
  const [verData, setVerData] = useState(false);
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    if (e) {
      setUserData({ ...userData, [e.target.name]: e.target.value });
      setDatos({ ...datos, [e.target.name]: e.target.value });
      setVerData(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Usuario.update(sessionStorage.getItem("id"), userData).then((response) => {
      console.log(response);
    });

    Detalle.post(datos).then((data) => {
      console.log(data);
    });
    setVerData(true);
  };

  const deleteId = (e) => {
    setLoggedIn(false);
    sessionStorage.clear();
    console.log(sessionStorage.getItem("id"));
  };

  const listaPaises = Country.getAllCountries();

  const paises = listaPaises.map((country) => {
    return (
      <option value={country.name} key={country.isoCode}>
        {country.name}
      </option>
    );
  });

  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <StyledDiv>
      <Container className="mb-5 mt-5">
        <Row className="justify-content-md-start justify-content-center">
          <Col xs="12" md="3">
            <ul>
              <li>
                <Button
                  className={activeTab === "order" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("order")}
                >
                  Order History
                </Button>
              </li>
              <li>
                <Button
                  className={activeTab === "profile" ? "activo mb-2" : "mb-2"}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile Info
                </Button>
              </li>
              <li className="mb-md-0 mb-3" onClick={() => navigate("/")}>
                <Button className="mb-2" type="submit" onClick={deleteId}>
                  Log Out
                </Button>
              </li>
            </ul>
          </Col>
          {activeTab === "order" && (
            <Col xs="11" md="9">
              <div className="productose">
                <div className="productor">
                  <a href="#">
                    <div className="producto_img">
                      <img src={co1} alt="" />
                    </div>
                  </a>
                  <div className="producto_footer">
                    <h1>Cooler</h1>
                    <p>Cooler</p>
                    <p className="price">$50</p>
                  </div>
                </div>

                <div className="productor">
                  <a href="#">
                    <div className="producto_img">
                      <img src={memo1} alt="" />
                    </div>
                  </a>
                  <div className="producto_footer">
                    <h1>Memory 16 GB</h1>
                    <p>Memory</p>
                    <p className="price">$80</p>
                  </div>
                </div>
                <div className="productor">
                  <a href="#">
                    <div className="producto_img">
                      <img src={pro03} alt="" />
                    </div>
                  </a>
                  <div className="producto_footer">
                    <h1>Processor Intel Core i5</h1>
                    <p>Processor</p>
                    <p className="price">$500</p>
                  </div>
                </div>
                <div className="productor">
                  <a href="#">
                    <div className="producto_img">
                      <img src={win3} alt="" />
                    </div>
                  </a>
                  <div className="producto_footer">
                    <h1>Windows 7</h1>
                    <p>Windows</p>
                    <p className="price">$100</p>
                  </div>
                </div>
                <div className="productor">
                  <a href="#">
                    <div className="producto_img">
                      <img src={case01} alt="" />
                    </div>
                  </a>
                  <div className="producto_footer">
                    <h1>Case Gamer</h1>
                    <p>categoria</p>
                    <p className="price">$60</p>
                  </div>
                </div>
                <div className="productor">
                  <a href="#">
                    <div className="producto_img">
                      <img src={pow1} alt="" />
                    </div>
                  </a>
                  <div className="producto_footer">
                    <h1>Power Supply Rm 750x</h1>
                    <p>Power Supply</p>
                    <p className="price">$80</p>
                  </div>
                </div>

                <div className="productor">
                  <a href="#">
                    <div className="producto_img">
                      <img src={sto1} alt="" />
                    </div>
                  </a>
                  <div className="producto_footer">
                    <h1>Storage 1TB</h1>
                    <p>Storage</p>
                    <p className="price">$80</p>
                  </div>
                </div>
                <div className="productor">
                  <a href="#">
                    <div className="producto_img">
                      <img src={placa01} alt="" />
                    </div>
                  </a>
                  <div className="producto_footer">
                    <h1>Main Board</h1>
                    <p>Main Board</p>
                    <p className="price">$70</p>
                  </div>
                </div>
              </div>
            </Col>
          )}
          <Col xs="11" md="9" className="forma bg-light text-dark rounded ">
            {/* Content */}
            {activeTab === "profile" && (
              <Row>
                <Col md="3" className="mb-md-1 mb-5 p-4 bordeDerecho">
                  <p
                    className=""
                    style={{ fontWeight: "700", fontSize: "1.125em" }}
                  >
                    Default
                  </p>
                  {verData === true && (
                    <div>
                      <small>{userData.Nombre + " " + userData.Apellido}</small>{" "}
                      <br />
                      <small>{userData.Correo}</small> <br />
                      <small>{datos.Direccion}</small> <br />
                      <small>{datos.Departamento}</small> <br />
                      <small>{datos.Ciudad}</small> <br />
                      <small>{country}</small> <br />
                      <small>{datos.Codigo_postal}</small> <br />
                      <small>{datos.Telefono}</small> <br />
                    </div>
                  )}
                </Col>
                <Col md="9" className="p-4 bordeArriba">
                  <Form>
                    <h5 className="mb-2 mb-md-5" style={{ fontWeight: "700" }}>
                      Edit address
                    </h5>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        className="mb-3 mb-md-0"
                        controlId="formGridFirstName"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          className="border-dark"
                          name="Nombre"
                          value={userData.Nombre}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          className="border-dark"
                          name="Apellido"
                          value={userData.Apellido}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder=""
                        className="border-dark"
                        name="Correo"
                        value={userData.Correo}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        placeholder=""
                        className="border-dark"
                        name="Direccion"
                        value={datos.Direccion}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        className="mb-3 mb-md-0"
                        controlId="formGridAparment"
                      >
                        <Form.Label>Aparment, suit, etc</Form.Label>
                        <Form.Control
                          placeholder=""
                          className="border-dark"
                          name="Departamento"
                          value={datos.Departamento}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          placeholder=""
                          className="border-dark"
                          name="Ciudad"
                          value={datos.Ciudad}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        xs="12"
                        md="6"
                        className="mb-3 mb-md-0"
                        controlId="formGridCountry"
                      >
                        <Form.Label>Country/Region</Form.Label>
                        <Form.Select
                          className="border-dark"
                          name="country"
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                        >
                          <option>Choose...</option>
                          {paises}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Postal/zip code</Form.Label>
                        <Form.Control
                          className="border-dark"
                          placeholder=""
                          name="Codigo_postal"
                          value={datos.Codigo_postal}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-5" controlId="formGridNumber">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        placeholder=""
                        className="border-dark"
                        name="Telefono"
                        value={datos.Telefono}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Row className="align-items-end">
                      <Col className="text-center text-md-start">
                        <Button
                          className="boton mb-md-0 mb-2"
                          onClick={handleSubmit}
                        >
                          Update Info
                        </Button>
                      </Col>
                      <Col className="text-center text-md-start" xs="12" md="7">
                        <a
                          href="/account"
                          className="text-decoration-none text-dark"
                        >
                          Cancel
                        </a>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default AccountInfo;
