import React from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <>
      <Container>
      <div className="col-sm d-flex justify-content-between" style={{ margin: '10px', alignItems: 'center' }}>
  <Nav.Link href="/"> <img src={logo} alt="logo" style={{ height: "100px",}} /></Nav.Link>
  <Navbar  bg="default" variant='light' expand="lg" style={{ paddingRight: '10px' }} collapseOnSelect>
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  activeKey="/">
        <LinkContainer className="mx-3 nav-custom" to='/' style={{padding: "10px 20px"}}>
          <NavDropdown.Item>Home</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer className="mx-3 nav-custom" style={{padding: "10px 20px"}} to='/posts'>
          <NavDropdown.Item>About</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer className="mx-3 nav-custom" style={{padding: "10px 20px"}} to='/recipes'>
          <NavDropdown.Item>Contact</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer className="mx-3 nav-custom" style={{padding: "10px 20px"}} to='/signIn  '>
          <NavDropdown.Item>Sign In</NavDropdown.Item>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
   
  </Navbar>
</div>
</Container>

     

      <Navbar style={{padding: '0 0', margin:'0', bordeRadius: '20px 20px 0 0'}} className= 'border-top-custom ' bg="primary" variant='light' expand="lg">
        <Container >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{height:'70px'}} activeKey="/">
              <Nav.Item style={{paddingTop: '10px'}} className='nav-custom-second nav-link-two border-custom'>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{paddingTop: '10px'}} className='nav-custom-second nav-link-two'>
                <Nav.Link eventKey="link-1">Posts</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{paddingTop: '10px'}} className='nav-custom-second nav-link-two'>
                <Nav.Link eventKey="link-2">Recipes</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header