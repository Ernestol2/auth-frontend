import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TypeIt from 'typeit-react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const token = cookies.get("TOKEN");



export default function AuthComponent() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://authentication-app-mern-railway-production.up.railway.app/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((err) => {
        err = new Error();
      })
  }, []);

  

  return (
    <>
    <div className="text-center">
        <h3 className='text-primary'>{message}...</h3>
        <TypeIt
          className="auth"
          options={{speed: 50, loop: true}}
          getBeforeInit={(instance) => {
            instance.type("Hola, Esta es la Ruta Autorizata")
                    .pause(750)
                    .delete(2)
                    .pause(500)
                    .type("da.")
                    .break()
                    .type("Haz ingresado exitosamente")
                    .break()
                    .type("a nuestra ruta Privada.")
                    .pause(2000);

            return instance;
          }} />
    </div>
    </>
  )
}
