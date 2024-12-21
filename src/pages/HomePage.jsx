import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  Row,
} from "react-bootstrap";
import styled from "styled-components";
import TopNavbar from "../components/TopNavbar";

import { Carousel } from "react-bootstrap";

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

const PageWrapper = styled.div`
  background-color: #f8f9fa;
  padding-bottom: 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CategoryButton = styled(Button)`
  margin: 0 5px;
  margin-bottom: 10px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.2s;
  padding: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled(Card.Img)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardTitle = styled(Card.Title)`
  font-weight: bold;
  color: #333;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardText = styled(Card.Text)`
  color: #6c757d;
  margin-bottom: 10px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Price = styled.span`
  font-weight: bold;
  color: #28a745;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EnrollButton = styled(Button)`
  background-color: #007bff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BannerTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BannerText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BannerButton = styled(Button)`
  background-color: #28a745;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const popularCourses = courses.slice(0, 3); // Assuming the first 3 courses are the most popular

const BannerSlider = styled(Carousel)`
  margin-bottom: 20px;

  .carousel-item {
    text-align: center;
  }

  .carousel-caption {
    position: static;
    padding-top: 20px;
  }
`;

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) => {
    return (
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <PageWrapper>
      <TopNavbar />
      <Container>
        <Title>Explore Our Courses</Title>
        <BannerSlider>
          {popularCourses.map((course) => (
            <Carousel.Item key={course.id}>
              <img
                className="d-block w-100"
                src={course.image}
                alt={course.title}
                width={100}
                height={400}
              />
              <Carousel.Caption>
                <BannerTitle>{course.title}</BannerTitle>
                <BannerText>{course.description}</BannerText>
                <BannerButton>Enroll Now for {course.price}</BannerButton>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </BannerSlider>
        <div className="mb-4 text-center">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              variant={
                selectedCategory === category ? "primary" : "outline-primary"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
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
              <StyledCard>
                <CardImage variant="left" src={course.image} />
                <Card.Body>
                  <CardTitle>{course.title}</CardTitle>
                  <CardText>{course.description}</CardText>
                  <div className="d-flex justify-content-between align-items-center">
                    <Price>{course.price}</Price>
                    <EnrollButton>Enroll Now</EnrollButton>
                  </div>
                </Card.Body>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </Container>
    </PageWrapper>
  );
}
