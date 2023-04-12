import React from 'react'
import { Facebook, Instagram, Whatsapp } from 'react-bootstrap-icons'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='social'>
            <a href="#!">
              <Facebook />
            </a>
            <a href="#!">
              <Instagram />
            </a>
            <a href="#!">
              <Whatsapp />
            </a>
        </div>
        <div className='text-footer'>
            <p>©Ernesto Lopez. 2023. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
