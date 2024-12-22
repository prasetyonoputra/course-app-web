import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  Row,
} from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";

import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

const PageWrapper = {
  backgroundColor: "#f8f9fa",
  paddingBottom: "20px",
  minHeight: "100vh",
};

const Title = {
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#007bff",
  padding: "10px 20px",
  borderRadius: "5px",
  textAlign: "center",
  marginBottom: "20px",
  fontSize: "2rem",
};

const CategoryButton = {
  margin: "0 5px",
  marginBottom: "10px",
  fontSize: "1rem",
};

const StyledCard = {
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  transition: "transform 0.2s",
  padding: "10px",
};

const CardImage = {
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
};

const CardTitle = {
  fontWeight: "bold",
  color: "#333",
  fontSize: "1.25rem",
};

const CardText = {
  color: "#6c757d",
  marginBottom: "10px",
  fontSize: "1rem",
};

const Price = {
  fontWeight: "bold",
  color: "#28a745",
  fontSize: "1.25rem",
};

const EnrollButton = {
  backgroundColor: "#007bff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "14px",
  fontWeight: "bold",
  transition: "background-color 0.2s",
};

const BannerTitle = {
  fontSize: "1.75rem",
  fontWeight: "bold",
  marginBottom: "10px",
};

const BannerText = {
  fontSize: "1.25rem",
  marginBottom: "10px",
};

const BannerButton = {
  backgroundColor: "#28a745",
  border: "none",
  padding: "10px 20px",
  fontSize: "1rem",
  fontWeight: "bold",
  borderRadius: "5px",
};

const BannerSlider = {
  marginBottom: "20px",
};

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const filteredCourses = courses.filter((course) => {
    return (
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={PageWrapper}>
      <TopNavbar />
      <Container>
        <h1 style={Title}>Explore Our Courses</h1>
        <Carousel style={BannerSlider}>
          {courses.slice(0, 3).map((course) => (
            <Carousel.Item key={course.id}>
              <img
                className="d-block w-100"
                src={course.image}
                alt={course.title}
                width={100}
                height={400}
              />
              <Carousel.Caption>
                <h2 style={BannerTitle}>{course.title}</h2>
                <p style={BannerText}>{course.description}</p>
                <Button style={BannerButton}>
                  Preview Now for {course.price}
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="mb-4 text-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category ? "primary" : "outline-primary"
              }
              onClick={() => setSelectedCategory(category)}
              style={CategoryButton}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="mb-4 text-center">
          <FormControl
            type="text"
            placeholder="Search courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Row>
          {filteredCourses.map((course) => (
            <Col key={course.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card style={StyledCard}>
                <Card.Img variant="top" src={course.image} style={CardImage} />
                <Card.Body>
                  <Card.Title style={CardTitle}>{course.title}</Card.Title>
                  <Card.Text style={CardText}>{course.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={Price}>{course.price}</span>
                    <Button
                      style={EnrollButton}
                      onClick={() => navigate(`/course/${course.id}`)}
                    >
                      Preview
                    </Button>
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
