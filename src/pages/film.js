import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import index_logo from '../assets/images/index_logo.jpg'


export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
          <Col md={4} className="divContent">
          <ul>
            <li>Geocenter Møns klint</li>
            <li>Fur Museum</li>
            <li>Østjyllands Museum</li>
            <li>Museum Sønderjylland Gram</li>
          </ul>
            
          </Col>
            <Col md={8} className="divContent">
            <h1>Film</h1>
            <p>
            Jordihovedet.dk har sendt et kamerahold rundt til de fire museer og besøgscentre, der står bag projektet.
            </p>
            <hr />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={4} className="divContent"></Col>
            <Col md={8} className="divContent">
            <p>
            De enkelte film
            </p>
            <hr />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={4} className="divContent"></Col>
            <Col md={8} className="divContent">
            <p>
            De enkelte film
            </p>
            <hr />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={4} className="divContent"></Col>
            <Col md={8} className="divContent">
            <p>
            De enkelte film
            </p>
            <hr />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={4} className="divContent"></Col>
            <Col md={8} className="divContent">
            <p>
            De enkelte film
            </p>
            <hr />
            </Col>
          </Row>

      
        </Container>
      </div>
  </Layout>
)
