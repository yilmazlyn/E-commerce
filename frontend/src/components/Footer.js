import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; E-commerce</Col>
        </Row>
      </Container>
    </footer>
  )
}
// py-3 means padding in y axe
export default Footer
