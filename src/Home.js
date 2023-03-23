import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fondo from "./img/img1.jpg";
import matrix from "./img/matrix.jpg";
import nasa from "./img/nasa.jpg";
import rayo from "./img/rayo.jpg";

export default function Home() {
  return (
    <Carousel fade className="p-3 carousel">
      <Carousel.Item>
        <img className="img-fluid" src={fondo} alt="First slide" />
        <Carousel.Caption>
          <h3>Bienvendos</h3>
          <p>A la pagina de prueba de</p>
          <h2>React-Auth</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid" src={matrix} alt="First slide" />
        <Carousel.Caption>
          <h3>Registrate</h3>
          <p>Para poder acceder a la ruta privada</p>
          <h2>React-Auth</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={nasa} alt="Second slide" />

        <Carousel.Caption>
          <h3>
            Si no estas registrado ni logeado. No podras ingresar a la Ruta
            Privada y seras enviado a la pagina principal
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={rayo} alt="Third slide" />

        <Carousel.Caption>
          <h3>Cuando termines</h3>
          <p>Puedes hacer logout para salir...</p>
          <p>Que la disfrutes!!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
