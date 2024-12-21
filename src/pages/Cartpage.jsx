import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
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
    <div style={styles.pageWrapper}>
      <TopNavbar />

      <Container>
        <h1 className="text-center mb-4" style={styles.title}>
          Your Cart
        </h1>

        <ListGroup variant="flush">
          {cart.map((item) => (
            <ListGroup.Item key={item.id} style={styles.listItem}>
              <Row>
                <Col xs={3} md={2} className="text-center">
                  <img src={item.image} alt={item.title} style={styles.image} />
                </Col>
                <Col xs={9} md={6} className="d-flex flex-column">
                  <h5 style={styles.cardTitle}>{item.title}</h5>
                  <span style={styles.price}>${item.price.toFixed(2)}</span>
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
                    <span style={styles.quantity}>{item.quantity}</span>
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
          <Button variant="success" size="lg" style={styles.checkoutButton}>
            Checkout
          </Button>
        </div>
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
    padding: "10px 20px",
  },
  listItem: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontWeight: "bold",
    color: "#28a745",
  },
  quantity: {
    margin: "0 10px",
    fontWeight: "bold",
  },
  checkoutButton: {
    marginTop: "20px",
  },
};
