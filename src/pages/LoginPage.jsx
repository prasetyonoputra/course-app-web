import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div style={styles.pageWrapper}>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Col md={6} lg={4} style={styles.card}>
            <h2 className="text-center" style={styles.title}>
              Welcome Back
            </h2>
            <p className="text-center" style={styles.subtitle}>
              Please login to your account
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.label}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={styles.input}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={styles.label}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={styles.input}
                />
              </Form.Group>

              <Button type="submit" style={styles.button} className="w-100">
                Login
              </Button>

              <div className="d-flex justify-content-between mt-3">
                <a href="/forgot-password" style={styles.link}>
                  Forgot password?
                </a>
                <a href="/register" style={styles.link}>
                  Register
                </a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundColor: "#007bff",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: "#333",
  },
  title: {
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#6c757d",
    marginBottom: "20px",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    borderRadius: "5px",
    border: "1px solid #ced4da",
    padding: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};