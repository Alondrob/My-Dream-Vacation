import styles from '../styles/Layout.module.css'
import {Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar';
import SignIn from './SignIn';

function Layout() {
  return (
      <Navbar bg="light" expand="sm">
          <Container>
              <Navbar.Brand href="#home">The Nomad's Journey</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <div>
                          
                      </div>
                      
                      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
                          {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                      {/* </NavDropdown> */}
                  </Nav>
              </Navbar.Collapse>
              <SearchBar/>
              <SignIn/>
          </Container>
      </Navbar>
  )
}

export default Layout