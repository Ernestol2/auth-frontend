import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FreeComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://authentication-app-mern-railway-production.up.railway.app/free-endpoint"
    };
    axios(configuration)
    .then((result) => {
      setMessage(result.data.message)
    })
    .catch((err) => {
      err = new Error();
    })
  }, [])
  
  return (
    <div>
        <h3 className="text-center text-success">{message}!!</h3>
    </div>
  )
}

