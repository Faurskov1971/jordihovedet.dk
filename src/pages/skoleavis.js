import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import avis_bg from '../assets/images/avis_bg.jpg'
import Slider from '../components/slider'


export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
          <Col md={1} className="divContent"></Col>
            <Col md={10} className="divContent">
            <h1>Avis</h1>
            <Slider/>
            </Col>
            <Col md={1} className="divContent"></Col>
            <Col md={12} className="divContent">
            
            <p>
              Læs avisen online. Klik på billedet herunder.
            </p>
              
            <p>
              Du kan også downloade avisen som PDF fil. Klik her</p>
            <p>
              ”Jord i hovedet” består af denne hjemmeside og en skoleavis produceret i samarbejde med TURBINE forlaget og dagbladet metroXpress. Avisen er sendt ud til alle landets skoler i klassesæt og kan samtidig læses her på siden.
              Opgaver til avisen samt lærervejledning finder du under fanebladene ”Opgaver” og ”Til lærerne”.

              Yderligere eksemplarer af skoleavisen kan købes på www.turbineforlaget.dk
              
            </p>
            </Col>
          </Row>
      
        </Container>
      </div>
  </Layout>
)
