import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fondo from "./img/img1.jpg"


export default function Home() {
  return (
    <Carousel fade className='p-3 carousel'>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={fondo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvendos</h3>
          <p>A la pagina de prueba de</p>
          <h2>React-Auth</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fondo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Registrate</h3>
          <p>Para poder acceder la las rutas privadas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fondo}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cuando termines</h3>
          <p>Puedes hacer logout para salir!</p>
          <p>Que la disfrutes</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
