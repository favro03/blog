import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div  style={{background:'salmon'}}>
    <Container >
     
            <Row >
                <Col className='text-center py-3 '  >
                    Copyright &copy; Favro 2023
                </Col>
            </Row>
            
    </Container>
    </div>
  )
}

export default Footer
