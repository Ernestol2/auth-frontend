import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

export default function Account() {
  return (
    <Row className="container d-flex justify-content-center">
      {/* Register */}
      <Col xs={9} sm={9} md={4} lg={4}>
      <Register />
      </Col>

      {/* Login */}
      <Col xs={9} sm={9} md={4} lg={4}>
        <Login />
      </Col>
    </Row>
  );
}
