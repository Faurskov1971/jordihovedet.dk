import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import index_logo from '../assets/images/index_logo.jpg'


export default () => (
  <Layout>
    <SEO title="Forside" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6} className="divContent">
            <img src={index_logo} className="imgSize" alt="Logo" />
            </Col>
            <Col md={6} className="divContent">
            <h1>Velkommen til Jord i Hovedet</h1>
    
            </Col>
          </Row>
      
        </Container>
      </div>
  </Layout>
)
