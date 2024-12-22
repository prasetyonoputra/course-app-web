import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";

const courses = [
  {
    id: 1,
    title: "Learn React",
    category: "Web Development",
    description: "Master React and build dynamic web apps.",
    price: "$19.99",
    image: "https://via.placeholder.com/150",
    lessons: [
      { id: 1, title: "Introduction to React", duration: "5:00" },
      { id: 2, title: "Components and Props", duration: "10:00" },
      { id: 3, title: "State and Lifecycle", duration: "12:00" },
    ],
  },
  {
    id: 2,
    title: "JavaScript Basics",
    category: "Programming",
    description: "Get started with JavaScript programming.",
    price: "$14.99",
    image: "https://via.placeholder.com/150",
    lessons: [
      { id: 1, title: "Variables and Data Types", duration: "8:00" },
      { id: 2, title: "Functions", duration: "10:00" },
      { id: 3, title: "Loops", duration: "7:30" },
    ],
  },
];

const CoursePreviewPage = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return (
      <div
        style={{
          backgroundColor: "#f8f9fa",
          paddingBottom: "20px",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Course not found
        </h1>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        paddingBottom: "20px",
        minHeight: "100vh",
      }}
    >
      <TopNavbar />

      <h1
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        {course.title}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: 3, marginRight: "20px" }}>
          <div
            style={{
              position: "relative",
              paddingTop: "56.25%",
              marginBottom: "20px",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Course Preview"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Card
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#28a745",
                }}
              >
                {course.price}
              </span>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6c757d",
                  marginTop: "10px",
                }}
              >
                {course.description}
              </p>
              <Button
                style={{
                  marginTop: "10px",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  border: "none",
                  borderRadius: "5px",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                Enroll Now
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div style={{ flex: 1, maxWidth: "300px" }}>
          <ListGroup style={{ marginTop: "20px" }}>
            {course.lessons.map((lesson) => (
              <ListGroup.Item key={lesson.id}>
                {lesson.title} - {lesson.duration}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewPage;
