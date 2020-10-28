import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from '../components/slider'
import Link from '../components/link'

import skoleavis from '../assets/images/pdf/skoleavis/Skoleavisen.pdf'


export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={12} className="divContent">
            <h1>Avis</h1>
            <p>
              Læs avisen online. Du bladrer ved at klikke på prikkerne under avisen.
            </p>
            <p>
              Du kan også downloade avisen som PDF-fil. <a href = {skoleavis} target="_blank" rel="noreferrer">Klik her</a>
               
            </p>


            </Col>
            <Col md={12} className="divContent">
            <Slider/>
            </Col>
            <Col md={12} className="divContent">
              
            <p>
              Jord i Hovedet består af denne hjemmeside og en skoleavis produceret i samarbejde med <a href = "https://turbine.dk/" target="_blank" rel="noreferrer">TURBINE forlaget</a> og dagbladet metroXpress. Avisen er sendt ud til alle landets skoler i klassesæt og kan samtidig læses her på siden.
               <br /><br />
              Opgaver til avisen samt lærervejledning finder du under fanebladene <Link to="/opgaver">opgaver</Link> og <Link to="/til-laererne">til lærerne</Link>.
              <br /><br />
              Yderligere eksemplarer af skoleavisen kan købes på <a href = "https://turbine.dk/" target="_blank" rel="noreferrer">www.turbineforlaget.dk</a>
            </p>
            </Col>
          </Row>
      
        </Container>
      </div>
  </Layout>
)
