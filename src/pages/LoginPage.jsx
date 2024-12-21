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
import styled from "styled-components";

// Styled components
const PageWrapper = styled.div`
  background-color: #007bff;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const Title = styled.h2`
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #6c757d;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledLabel = styled(Form.Label)`
  font-weight: bold;
  color: #333;
`;

const StyledInput = styled(Form.Control)`
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 10px;
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

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
    <PageWrapper>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Col md={6} lg={4}>
            <Card>
              <Title>Welcome Back</Title>
              <Subtitle>Please login to your account</Subtitle>
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
                    <StyledLabel>Username</StyledLabel>
                    <StyledInput
                      type="text"
                      placeholder="Enter username"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>

                  <StyledButton
                    type="submit"
                    className="w-100"
                    disabled={loginProcess}
                  >
                    {loginProcess ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Login"
                    )}
                  </StyledButton>

                  <div className="d-flex justify-content-between mt-3">
                    <StyledLink href="/forgot-password">
                      Forgot password?
                    </StyledLink>
                    <StyledLink href="/register">Register</StyledLink>
                  </div>
                </Form>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}
