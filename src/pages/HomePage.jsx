import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";

export default function HomePage() {
  const courses = [
    {
      id: 1,
      title: "Learn React",
      category: "Web Development",
      description: "Master React and build dynamic web apps.",
      price: "$19.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "JavaScript Basics",
      category: "Programming",
      description: "Get started with JavaScript programming.",
      price: "$14.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "CSS Mastery",
      category: "Web Design",
      description: "Become a CSS expert and style stunning websites.",
      price: "$12.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Python for Beginners",
      category: "Programming",
      description: "Learn Python from scratch.",
      price: "$24.99",
      image: "https://via.placeholder.com/150",
    },
  ];

  const categories = ["All", "Web Development", "Programming", "Web Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div style={styles.pageWrapper}>
      <TopNavbar />

      <Container>
        <h1 className="text-center mb-4" style={styles.title}>
          Explore Our Courses
        </h1>
        <div className="mb-4 text-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category ? "primary" : "outline-primary"
              }
              style={styles.categoryButton}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <Row>
          {filteredCourses.map((course) => (
            <Col key={course.id} md={6} lg={4} className="mb-4">
              <Card style={styles.card}>
                <Card.Img
                  variant="top"
                  src={course.image}
                  style={styles.image}
                />
                <Card.Body>
                  <Card.Title style={styles.cardTitle}>
                    {course.title}
                  </Card.Title>
                  <Card.Text style={styles.cardText}>
                    {course.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={styles.price}>{course.price}</span>
                    <Button style={styles.button}>Enroll Now</Button>
                  </div>
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
    color: "#fff",
    backgroundColor: "#007bff",
    padding: "10px 20px",
    borderRadius: "5px",
  },
  categoryButton: {
    margin: "0 5px",
  },
  card: {
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
  cardText: {
    color: "#6c757d",
    marginBottom: "10px",
  },
  price: {
    fontWeight: "bold",
    color: "#28a745",
    fontSize: "18px",
  },
  button: {
    backgroundColor: "#007bff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "bold",
  },
};
