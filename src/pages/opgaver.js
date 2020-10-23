import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

import opgaver_bg from '../assets/images/opgaver_bg.jpg'
import opgaver_bg_small from '../assets/images/opgaver_bg_small.jpg'

import opgave1 from '../assets/images/pdf/opgaver/Opgaver_s4-5.pdf'
import opgave2 from '../assets/images/pdf/opgaver/Opgaver_s6-7.pdf'
import opgave3 from '../assets/images/pdf/opgaver/Opgaver_s8-9.pdf'
import opgave4 from '../assets/images/pdf/opgaver/Opgaver_s10-11.pdf'
import opgave5 from '../assets/images/pdf/opgaver/Opgaver_s12-13.pdf'
import opgave6 from '../assets/images/pdf/opgaver/Opgaver_s14-15.pdf'
import opgave7 from '../assets/images/pdf/opgaver/Opgaver_s16-17.pdf'
import opgave8 from '../assets/images/pdf/opgaver/Opgaver_s18-19.pdf'

export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6} className="divContent">
            <h1>Opgaver</h1>
            <p>
              Her er opgaver som passer til indholdet i skoleavisen. For at besvare nogle af spørgsmålene, må du også gå på jagt i artiklerne her på siden for at finde svaret.

              <br /><br />
              
              <a href = {opgave1} target="_blank" rel="noreferrer">
                Opgaver til side 4-5 i skoleavisen - Kridttid
              </a>

              <br /><br />
              
              <a href = {opgave2} target="_blank" rel="noreferrer">
                Opgaver til side 6-7 i skoleavisen -Overgang mellem kridttid og tertiærtid
              </a>

              <br /><br />
              
              <a href = {opgave3} target="_blank" rel="noreferrer">
                Opgaver til side 8-9 i skoleavisen - Danientid
              </a>

              <br /><br />
              
              <a href = {opgave4} target="_blank" rel="noreferrer">
                Opgaver til side 10-11 i skoleavisen - Eocæntid
              </a>

              <br /><br />
              
              <a href = {opgave5} target="_blank" rel="noreferrer">
                Opgaver til side 12-13 i skoleavisen - Miocæntid
              </a>

              <br /><br />
              
              <a href = {opgave6} target="_blank" rel="noreferrer">
                Opgaver til side 14-15 i skoleavisen -Kvartærtid
              </a>

              <br /><br />
              
              <a href = {opgave7} target="_blank" rel="noreferrer">
                Opgaver til side 16-17 i skoleavisen - Geologisk tid
              </a>
              
              <br /><br />
              
              <a href = {opgave8} target="_blank" rel="noreferrer">
                Opgaver til side 18-19 i skoleavisen -Fremtiden
              </a>
            </p>
            <img src={opgaver_bg_small} className="imgSize" alt="Logo" />
            </Col>
            <Col md={6} className="divContent">
            <br /><br />
            <br /><br />
            <img src={opgaver_bg} className="imgSize" alt="Logo" />
    
            </Col>
          </Row>
      
        </Container>
      </div>
  </Layout>
)
