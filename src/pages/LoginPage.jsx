import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router";

// API calls
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

const checkToken = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/auth/check-token`, { token });
    return response.data.data.isValid;
  } catch (error) {
    console.error("Token validation failed", error);
    return false;
  }
};

const signIn = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-in`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

// Custom hook for token validation
const useTokenValidation = (navigate) => {
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        const isValid = await checkToken(token);
        if (isValid) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      }
    };

    validateToken();
  }, [navigate]);
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loginProcess, setLoginProcess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useTokenValidation(navigate);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginProcess(true);
    setErrorMessage("");
    setSuccessMessage("");
    const username = event.target.formBasicUsername.value;
    const password = event.target.formBasicPassword.value;

    try {
      const data = await signIn(username, password);
      localStorage.setItem("authToken", data.data.token);
      setSuccessMessage("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setErrorMessage(error);
      setLoginProcess(false);
    }
  };

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
          <Col md={6} lg={4}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                color: "#333",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  color: "#007bff",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                Welcome Back
              </h2>
              <p
                style={{
                  color: "#6c757d",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Please login to your account
              </p>
              {loading ? (
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  {errorMessage && (
                    <Alert variant="danger">{errorMessage}</Alert>
                  )}
                  {successMessage && (
                    <Alert variant="success">{successMessage}</Alert>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label style={{ fontWeight: "bold", color: "#333" }}>
                      Username
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      required
                      style={{
                        borderRadius: "5px",
                        border: "1px solid #ced4da",
                        padding: "10px",
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
                      required
                      style={{
                        borderRadius: "5px",
                        border: "1px solid #ced4da",
                        padding: "10px",
                      }}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100"
                    disabled={loginProcess}
                    style={{
                      backgroundColor: "#007bff",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "5px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      width: "100%",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {loginProcess ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Login"
                    )}
                  </Button>

                  <div className="d-flex justify-content-between mt-3">
                    <a
                      href="/forgot-password"
                      style={{
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      Forgot password?
                    </a>
                    <a
                      href="/register"
                      style={{
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      Register
                    </a>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
