import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import links_bg from '../assets/images/links_bg.jpg'


export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
          <Col md={6} className="divContent">
          <h1>Links</h1>
          <p>
            Her har du en række geo-links, der kan være et besøg værd:
            <br /><br />
            
            <a href = "https://moensklint.dk/" target="_blank" rel="noreferrer">
              www.moensklint.dk
            </a>
            <br /><br />
            
            <a href = "https://museumsalling.dk/kom-og-besog-os/fur-fossiler/" target="_blank" rel="noreferrer">
              www.furmuseum.dk
            </a>
            <br /><br />
            
            <a href = "https://www.aabne-samlinger.dk/" target="_blank" rel="noreferrer">
              www.aabne-samlinger.dk/
            </a>
            <br /><br />
            
            <a href = "https://msj.dk/" target="_blank" rel="noreferrer">
              www.museum-sonderjylland.dk
            </a>
            <br /><br />
            
            <a href = "https://udinaturen.dk/" target="_blank" rel="noreferrer">
              www.naturnet.dk
            </a>
            - søg på det sted ,du gerne vil besøge ,og læs mere.
            
            <br /><br />
            <a href = "https://geo.au.dk/" target="_blank" rel="noreferrer">
              www.geo.ao.dk
            </a>
            - Geologisk Institut på Århus Universitet. Du kan booke et foredrag med             
            Bo Holm Jacobsen (læs mere på side 16-17 i skoleavisen).
            <br /><br />
            
             <a href = "https://snm.ku.dk/" target="_blank" rel="noreferrer">
              www.geologi.snm.ku.dk
             </a>
             - Geologisk Museum i København. Book en rundvisning - måske bliver det med Jarl du kan møde i skoleavisen på side 21.
          </p>

            </Col>
            <Col md={6} className="divContent">
            <img src={links_bg} className="imgSize" alt="Logo" />
            </Col>
          </Row>
      
        </Container>
      </div> 
  </Layout>
)
