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
          <Col md={3} className="divContent">
          <ul>
            <li><Link to="/film_1">Geocenter Møns klint</Link></li>
            <li><Link to="/film_2">Fur Museum</Link></li>
            <li><Link to="/film_3">Østjyllands Museum</Link></li>
            <li><Link to="/film_4">Museum Sønderjylland Gram</Link></li>
          </ul>
            
          </Col>
            <Col md={9} className="divContent">
            <h1>Østsjællands Museum</h1>
            <p>
            Jordihovedet.dk har sendt et kamerahold rundt til de fire museer og besøgscentre, der står bag projektet.
            </p>
            <hr />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={3} className="divContent"></Col>
            <Col md={9} className="divContent">
                  <iframe title="Østsjællands Museum" src="https://player.vimeo.com/video/470915098" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </Col>
          </Row>          
      
        </Container>
      </div>
  </Layout>
)
