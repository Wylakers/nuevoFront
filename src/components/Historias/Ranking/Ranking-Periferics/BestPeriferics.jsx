import { Card, Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from 'react'
import perifericos from "../../api/rankingperifericos"

const BestPeriferics = () => {
    const container = {
        textAlign: "left",
        alignItems: "left",
        marginLeft: "50px"
    }
    const containerTitulo = {
        marginLeft: "0px",
        marginTop: "30px",
        textAlign: "left",
        color: "white"
    }
    const containerOpciones = {
        marginLeft: "65px",
        marginTop: "20px"
    }
    const containerStyle = {
        width: "70%",
        marginLeft: "-50px"
    }
    const mystyle = {
        width: "60px",
        height: "60px",
        padding: "1x"
    };

    const border = {
        border: "1px solid black",
        marginTop: "8px",
    }
    const imagen = {
        display: "flex",
        width: "15%",
        textAlign: "center",
        alignItems: "center"
    }
    const nombre = {
        textAlign: "left",
        marginRight: "20px",
        marginTop: "15px",
        width: "75%",
        alignItems: "center",
        fontSize: "x-large"
    }
    const precio = {
        textAlign: "left",
        marginTop: "15px",
        width: "15%",
        fontSize: "x-large"
    }

    const [fperiferic, setperifericos] = useState([]);

    const periferico = async () => {
        const perifericResponse = await perifericos.getAll();
        setperifericos(perifericResponse.data)
    };

    useEffect(() => {
        periferico()
    }, []);

    const periferic = fperiferic.map((item) => {
        return (
            <Row>
                <Card style={border}>
                    <Card.Body>
                        <Container>
                            <Row>
                            <Col style={imagen}>
                                <img src={item.description} alt="" style={mystyle}>
                                    </img>
                                </Col>
                                <Col xs={5} style={nombre}>
                                    {item.name}
                                </Col>
                                <Col style={precio}>
                                    ${item.price}
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </Row>
        )
    });

    return (
        <Container style={container}>
            <Row style={containerTitulo}>
                    <h1>Ranking best sellers periferics</h1>
            </Row>
            <Row style={containerOpciones}>
                <Container style={containerStyle}>
                    <Row>
                        <Col>
                            {periferic}
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )   
}

export default BestPeriferics