import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
} from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <NavDropdown title="Меню" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/">
              Главная
            </Link>
            <Link className="dropdown-item" to="about-me">
              Обо мне
            </Link>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
