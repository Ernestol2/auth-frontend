import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
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

  const logout = () => {
    //remover la cookie
    cookies.remove("TOKEN", { path: "/" });
    //redireccionar el usuario a la pagina principal
    window.location.href = "/"
  };

  return (
    <>
    <div className='d-flex justify-content-end'>
    <Button 
          type='submit' 
          variant='danger'
          onClick={() => logout()}>Logout</Button>
    </div>
    <div className="text-center">
        <h1>Auth Component</h1>
        <h3 className="text-success">{message}...</h3>
    </div>
    </>
  )
}
