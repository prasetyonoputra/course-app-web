import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div style={styles.pageWrapper}>
      <TopNavbar balance={user.balance} />

      <Container>
        <h1 className="text-center mb-4" style={styles.title}>
          My Profile
        </h1>
        <Card style={styles.profileCard} className="mb-4">
          <Card.Body>
            <h2 style={styles.userName}>{user.name}</h2>
            <p style={styles.userEmail}>{user.email}</p>
            <p style={styles.userPhone}>{user.phone}</p>
            <p style={styles.userAddress}>{user.address}</p>
            <p style={styles.userBalance}>
              Balance: ${user.balance.toFixed(2)}
            </p>
            <Button variant="primary" style={styles.editButton}>
              Edit Profile
            </Button>
          </Card.Body>
        </Card>

        <h3 className="mb-3" style={styles.sectionTitle}>
          My Courses
        </h3>
        <Row>
          {user.courses.map((course) => (
            <Col key={course.id} md={6} lg={4} className="mb-4">
              <Card style={styles.courseCard}>
                <Card.Img
                  variant="top"
                  src={course.image}
                  style={styles.image}
                />
                <Card.Body>
                  <Card.Title style={styles.cardTitle}>
                    {course.title}
                  </Card.Title>
                  <p style={styles.instructor}>
                    Instructor: {course.instructor}
                  </p>
                  <p style={styles.progress}>Progress: {course.progress}</p>
                  <Button variant="primary" style={styles.viewButton}>
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

const styles = {
  pageWrapper: {
    backgroundColor: "#f8f9fa",
    paddingBottom: "20px",
    minHeight: "100vh",
  },
  title: {
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "30px",
  },
  profileCard: {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#333",
  },
  userEmail: {
    color: "#6c757d",
    marginBottom: "10px",
  },
  userPhone: {
    color: "#6c757d",
    marginBottom: "10px",
  },
  userAddress: {
    color: "#6c757d",
    marginBottom: "10px",
  },
  userBalance: {
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: "15px",
  },
  editButton: {
    padding: "5px 15px",
    borderRadius: "5px",
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  courseCard: {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  image: {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#333",
  },
  instructor: {
    color: "#6c757d",
    marginBottom: "5px",
  },
  progress: {
    color: "#6c757d",
    marginBottom: "10px",
  },
  viewButton: {
    padding: "5px 10px",
    borderRadius: "5px",
  },
};
