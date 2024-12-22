import React, { useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Learn React",
      price: 19.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "JavaScript Basics",
      price: 14.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleQuantityChange = (id, change) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        paddingBottom: "20px",
        minHeight: "100vh",
      }}
    >
      <TopNavbar />

      <Container>
        <h1
          className="text-center mb-4"
          style={{ fontWeight: "bold", color: "#007bff", padding: "10px 20px" }}
        >
          Your Cart
        </h1>

        <ListGroup variant="flush">
          {cart.map((item) => (
            <ListGroup.Item
              key={item.id}
              style={{ padding: "15px", borderBottom: "1px solid #ddd" }}
            >
              <Row>
                <Col xs={3} md={2} className="text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "5px",
                    }}
                  />
                </Col>
                <Col xs={9} md={6} className="d-flex flex-column">
                  <h5 style={{ fontWeight: "bold", color: "#333" }}>
                    {item.title}
                  </h5>
                  <span style={{ fontWeight: "bold", color: "#28a745" }}>
                    ${item.price.toFixed(2)}
                  </span>
                </Col>
                <Col
                  xs={12}
                  md={4}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </Button>
                    <span style={{ margin: "0 10px", fontWeight: "bold" }}>
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="text-center mt-4">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <Button variant="success" size="lg" style={{ marginTop: "20px" }}>
            Checkout
          </Button>
        </div>
      </Container>
    </div>
  );
}
