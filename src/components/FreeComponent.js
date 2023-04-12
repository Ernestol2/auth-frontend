import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'animate.css'

const USERS_URL = "https://jsonplaceholder.typicode.com/users"

export default function FreeComponent() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState()

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://authentication-app-mern-railway-production.up.railway.app/free-endpoint"
    };
    axios(configuration)
    .then((result) => setMessage(result.data.message))
    .catch((err) => err = new Error())

    fetch(USERS_URL)
     .then(res => res.json())
     .then(data => setUsers(data))
     
     .catch((e) => e = new Error() )
     
  }, [])
  
  return (
    <div className='free-component animate__animated animate__fadeInUp'>
        {message ? <h3 className='text-light'>Fetch Users</h3> : null}
        {users?.map(({id, name, email, phone, website }) => (
            <div className='users-container container'>
              <ul key={id} className="users-list text-light">
                <div>
                  <img
                    className='user-avatar' 
                    src={`https://robohash.org/${id+10}`} 
                    alt="userAvatar" />
                </div>
                <div className='users-info'>
                  <li><strong>{name}</strong></li>
                  <li>{email}</li>
                </div>
                <div>
                  <button className='
                  btn
                  btn-light
                  m-2'>Follow</button>
                </div>
              </ul>
            </div>
        ))}
    </div>
  )
}

