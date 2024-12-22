import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";

export default function MyProfilePage() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    address: "123 Main St, City, Country",
    balance: 120.5,
    courses: [
      {
        id: 1,
        title: "Learn React",
        progress: "80%",
        image: "https://via.placeholder.com/150",
        instructor: "Jane Smith",
      },
      {
        id: 2,
        title: "JavaScript Basics",
        progress: "50%",
        image: "https://via.placeholder.com/150",
        instructor: "Mark Johnson",
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        paddingBottom: "20px",
        minHeight: "100vh",
      }}
    >
      <TopNavbar balance={user.balance} />

      <Container>
        <h1
          className="text-center mb-4"
          style={{ fontWeight: "bold", color: "#007bff", marginBottom: "30px" }}
        >
          My Profile
        </h1>
        <Card
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
          className="mb-4"
        >
          <Card.Body>
            <h2 style={{ fontWeight: "bold", fontSize: "24px", color: "#333" }}>
              {user.name}
            </h2>
            <p style={{ color: "#6c757d", marginBottom: "10px" }}>
              {user.email}
            </p>
            <p style={{ color: "#6c757d", marginBottom: "10px" }}>
              {user.phone}
            </p>
            <p style={{ color: "#6c757d", marginBottom: "10px" }}>
              {user.address}
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "#28a745",
                marginBottom: "15px",
              }}
            >
              Balance: ${user.balance.toFixed(2)}
            </p>
            <Button
              variant="primary"
              style={{ padding: "5px 15px", borderRadius: "5px" }}
            >
              Edit Profile
            </Button>
          </Card.Body>
        </Card>

        <h3
          className="mb-3"
          style={{ fontWeight: "bold", color: "#333", marginBottom: "15px" }}
        >
          My Courses
        </h3>
        <Row>
          {user.courses.map((course) => (
            <Col key={course.id} md={6} lg={4} className="mb-4">
              <Card
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={course.image}
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold", color: "#333" }}>
                    {course.title}
                  </Card.Title>
                  <p style={{ color: "#6c757d", marginBottom: "5px" }}>
                    Instructor: {course.instructor}
                  </p>
                  <p style={{ color: "#6c757d", marginBottom: "10px" }}>
                    Progress: {course.progress}
                  </p>
                  <Button
                    variant="primary"
                    style={{ padding: "5px 10px", borderRadius: "5px" }}
                  >
                    Continue
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
