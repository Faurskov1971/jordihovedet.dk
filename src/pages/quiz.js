import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"


export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={12}>
              <iframe 
              src="https://faurskov.com/jeopardy/" 
              width="100%"
              height="600px"
              title="Quiz"></iframe>
            </Col>
          </Row>
      
        </Container>
      </div>
  </Layout>
)
