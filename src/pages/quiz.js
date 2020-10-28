import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"


export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
          <Col md={12} className="divContent">
            <h1>Quiz</h1>
            <p>
            Prøv Jord i Hovedet-quizzen!
            </p>
          </Col>
          <Col className="divContent" md={2}>
          <ul>
            <li className="activeSublink"><Link to="/quiz">Quiz 1</Link></li>
            <li><Link to="/quiz_2">Quiz 2</Link></li>

          </ul>
          </Col>
            <Col md={10} className="divContent paddingTop">
              <iframe 
              src="https://faurskov.com/jordihovedet/quiz1/" 
              width="100%"
              height="700px"
              title="Quiz"></iframe>
            </Col>
          </Row>
        </Container>
      </div>
  </Layout>
)
