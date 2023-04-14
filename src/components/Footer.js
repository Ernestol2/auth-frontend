import React from 'react'
import { Google, Github, Linkedin } from 'react-bootstrap-icons'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='social'>
            <a href="https://github.com/Ernestol2">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/ernesto-lopez-5a21941a1/">
              <Linkedin />
            </a>
            <a href="https://www.gmail.com">
              <Google />
            </a>
        </div>
        <div className='text-footer'>
            <p>©Ernesto Lopez. 2023. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}
