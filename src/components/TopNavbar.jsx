import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function TopNavbar({ balance = 0 }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await axios.post(
            "http://localhost:8080/api/auth/check-token",
            { token }
          );
          if (response.data.data.isValid) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error("Token validation failed", error);
          setIsLoggedIn(false);
        }
      }
    };

    checkToken();
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <Navbar
      sticky="top"
      bg="primary"
      variant="dark"
      expand="lg"
      style={{ marginBottom: "20px" }}
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} style={styles.navbarBrand}>
          MyCourses
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <span style={styles.balance}>Balance: ${balance.toFixed(2)}</span>
            <Button
              variant="outline-light"
              style={styles.navButton}
              onClick={handleCart}
            >
              <FaShoppingCart /> Cart
            </Button>
            {isLoggedIn ? (
              <Dropdown>
                <Dropdown.Toggle variant="light" style={styles.navButton}>
                  <FaUserCircle /> Profile
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => navigate("/profile")}>
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = {
  navbarBrand: {
    fontWeight: "bold",
    fontSize: "24px",
    cursor: "pointer",
  },
  navButton: {
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
  },
  balance: {
    fontWeight: "bold",
    color: "#fff",
    marginRight: "20px",
  },
};
