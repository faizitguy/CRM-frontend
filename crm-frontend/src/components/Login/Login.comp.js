import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />

          <Form autoComplete="off">
            <Form.Group>
              <Form.Label
                style={{
                  color: "white",
                  display: "flex",
                }}
              >
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                style={{
                  color: "white",
                  display: "flex",
                }}
              >
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="/password-reset">Forget Password?</a>
        </Col>
      </Row>
      <Row className="py-4">
        <Col
          style={{
            color: "white",
            display: "flex",
          }}
        >
          Are you new here? <a href="/registration">Register Now</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
