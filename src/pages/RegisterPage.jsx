import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import styled from "styled-components";

const PageWrapper = styled.div`
  background: linear-gradient(135deg, #6b73ff 0%, #000dff 100%);
  color: #212529;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;

const StyledCol = styled(Col)`
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
`;

const Subtitle = styled.p`
  color: #6c757d;
  margin-bottom: 20px;
`;

const Label = styled(Form.Label)`
  font-weight: bold;
  color: #333;
`;

const Input = styled(Form.Control)`
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 10px;
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

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
    <PageWrapper>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <StyledCol md={6} lg={4}>
            <Title className="text-center">Create an Account</Title>
            <Subtitle className="text-center">
              Join us by creating a new account
            </Subtitle>

            {loading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Label>Full Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    name="fullName"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Label>Username</Label>
                  <Input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Label>Email address</Label>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImageProfile">
                  <Label>Profile Image</Label>
                  <Input type="file" name="profileImage" required />
                </Form.Group>

                <StyledButton
                  type="submit"
                  className="w-100"
                  disabled={registering}
                >
                  {registering ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Register"
                  )}
                </StyledButton>

                <div className="text-center mt-3">
                  <StyledLink href="/login">
                    Already have an account? Login
                  </StyledLink>
                </div>
              </Form>
            )}
          </StyledCol>
        </Row>
      </Container>
    </PageWrapper>
  );
}
