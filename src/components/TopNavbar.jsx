import { useState } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function TopNavbar({ balance = 0 }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <Navbar
      sticky="top"
      bg="primary"
      variant="dark"
      expand="lg"
      style={styles.navbar}
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} style={styles.navbarBrand}>
          MyCourses
        </Navbar.Brand>
        <Nav className="ms-auto align-items-center">
          <span style={styles.balance}>Balance: ${balance.toFixed(2)}</span>
          <Button
            variant="outline-light"
            style={styles.navButton}
            onClick={handleCart}
          >
            Cart
          </Button>
          {isLoggedIn ? (
            <Dropdown>
              <Dropdown.Toggle variant="light" style={styles.navButton}>
                Profile
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/profile")}>
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsLoggedIn(false)}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button
              variant="light"
              style={styles.navButton}
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

const styles = {
  navbar: {
    marginBottom: "20px",
  },
  navbarBrand: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  navButton: {
    marginLeft: "10px",
  },
  balance: {
    fontWeight: "bold",
    color: "#fff",
    marginRight: "20px",
  },
};
