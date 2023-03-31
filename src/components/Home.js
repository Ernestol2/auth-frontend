import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import nasa from "../img/nasa.jpg";

const myStyle = {
  backgroundImage: `url(${nasa})`,
  height: "65vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  opacity: .9
}

export default function Home() {
  return (
    <div className="main-page">
      <div style={myStyle} className="titles">
            <h2 className="text-info p-5">BIENVENIDO A REAT-AUTH</h2>
            <p className="text-light">En esta pagina usamos JWT, Cookies, Hooks
            y otros paquetes para su correcto funcionamiento.</p>
            <p className="text-light p-3">Podras visitar rutas publicas sin estar registrado
            y rutas privadas una ves te registres y hagas login.</p>
            <div className="buttons">
                <Button href="/register" variant="outline-info">Registrame</Button>{' '}
                <Button href="/login" variant="outline-light">Login</Button>
            </div>
        </div>
        <div>
            <Container className="p-4 news text-secondary">
                <Row>
                    <Col md={4} sm={12}>
                        <h6>TITULO 1</h6>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga dolores, error explicabo nesciunt totam magnam necessitatibus unde! Impedit, aut ipsum ea quis commodi possimus similique atque placeat! At quam sequi alias accusantium iste, voluptatem repudiandae, impedit fugit deserunt repellendus ratione ducimus enim exercitationem atque architecto maiores incidunt vitae. Ut.</p>
                    </Col>
                    <Col md={4} sm={12}>
                        <h6>TITULO 2</h6>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga dolores, error explicabo nesciunt totam magnam necessitatibus unde! Impedit, aut ipsum ea quis commodi possimus similique atque placeat! At quam sequi alias accusantium iste, voluptatem repudiandae, impedit fugit deserunt repellendus ratione ducimus enim exercitationem atque architecto maiores incidunt vitae. Ut.</p>
                    </Col>
                    <Col md={4} sm={12}>
                        <h6>TITULO 3</h6>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga dolores, error explicabo nesciunt totam magnam necessitatibus unde! Impedit, aut ipsum ea quis commodi possimus similique atque placeat! At quam sequi alias accusantium iste, voluptatem repudiandae, impedit fugit deserunt repellendus ratione ducimus enim exercitationem atque architecto maiores incidunt vitae. Ut.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
}
