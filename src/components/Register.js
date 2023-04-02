import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import axios from "axios";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    //prevent the form refreshing the page
    e.preventDefault();
    const config = {
      method: "post",
      url: "https://authentication-app-mern-railway-production.up.railway.app/register",
      data: {
        email,
        password,
      },
    };
    axios(config)
      .then((result) => {
        setRegister(true);
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000)
      })
      .catch((err) => {
        err = new Error();
      });
  };



  return (
    <div className="register d-flex justify-content-center text-light"> 
    <Col xs={8} sm={6} md={4} lg={3}>
    <h2>Register</h2>
    <Form onSubmit={(e) => handleSubmit(e)}>
      {/* email */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>

      {/* password */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Group>

      {/* submit button */}
      <Button
        className="m-2"
        variant="primary"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Register
      </Button>
      {register ? (
          <p className="text-success">You Can Login Now!</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
    </Form>
    </Col>
  </div>
  );
}
