import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const config= {
      method: "post",
      url: "https://authentication-app-mern-railway-production.up.railway.app/login",
      data: {
        email,
        password,
      },
    };
    axios(config)
    .then((result) => {
      setLogin(true);
      cookies.set("TOKEN", result.data.token, {path: "/"});
      setTimeout(() => {
        window.location.href = "/auth";
      }, 3000)
    })
    .catch((err) => {
      err = new Error();
    })
  }

  return (
    <div className='d-flex justify-content-center text-light'>
     <Col xs={8} sm={6} md={4} lg={3}>
       <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button 
            className='m-2' 
            variant="primary" 
            type="submit"
            onClick={(e) => handleSubmit}>
          Login
        </Button>
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </Form>
     </Col>
    </div>
  )
}


