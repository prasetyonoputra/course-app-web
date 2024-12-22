import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function ForgotPasswordPage() {
  return (
    <div
      style={{
        backgroundColor: "#007bff",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Col
            md={6}
            lg={4}
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              color: "#333",
            }}
          >
            <h2
              className="text-center"
              style={{
                fontWeight: "bold",
                color: "#007bff",
                marginBottom: "10px",
              }}
            >
              Forgot Password
            </h2>
            <p
              className="text-center"
              style={{ color: "#6c757d", marginBottom: "20px" }}
            >
              Enter your email to reset your password
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{
                    borderRadius: "5px",
                    border: "1px solid #ced4da",
                    padding: "10px",
                  }}
                />
              </Form.Group>

              <Button
                type="submit"
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                className="w-100"
              >
                Reset Password
              </Button>

              <div className="text-center mt-3">
                <a
                  href="/login"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  Back to Login
                </a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
