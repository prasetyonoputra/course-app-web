import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";

export default function RegisterPage() {
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegistering(true);

    const formData = new FormData(e.target);

    try {
      const response = await axios.post("/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Registration successful!");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("There was an error registering!", error);
      alert("An error occurred. Please try again.");
    } finally {
      setRegistering(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
        color: "#212529",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
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
              Create an Account
            </h2>
            <p
              className="text-center"
              style={{ color: "#6c757d", marginBottom: "20px" }}
            >
              Join us by creating a new account
            </p>

            {loading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    name="fullName"
                    required
                    style={{
                      borderRadius: "5px",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
                    Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    required
                    style={{
                      borderRadius: "5px",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                    style={{
                      borderRadius: "5px",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    style={{
                      borderRadius: "5px",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    required
                    style={{
                      borderRadius: "5px",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImageProfile">
                  <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
                    Profile Image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="profileImage"
                    required
                    style={{
                      borderRadius: "5px",
                      border: "1px solid #ced4da",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100"
                  disabled={registering}
                  style={{
                    backgroundColor: "#007bff",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    transition: "background-color 0.3s",
                  }}
                >
                  {registering ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Register"
                  )}
                </Button>

                <div className="text-center mt-3">
                  <a
                    href="/login"
                    style={{
                      color: "#007bff",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    Already have an account? Login
                  </a>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
