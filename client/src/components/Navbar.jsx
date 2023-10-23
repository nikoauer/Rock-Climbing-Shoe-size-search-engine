// import { useState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { Container, Navbar, Nav, Modal, Tab } from "react-bootstrap";

const NavbarApp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar variant="underline" style={{ padding: "5px", backgroundColor: "#ffa200" }}>
        <Container>
          <Navbar.Brand>Climbing Shoes</Navbar.Brand>
        </Container>
        <Nav className="ml-auto" variant="underline">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/savedshoes">
              Saved
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setShowModal(true)}>Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
        style={{backgroundColor: "#fac637"}}
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default NavbarApp;
