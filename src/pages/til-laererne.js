import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import til_laeren_small_bg from '../assets/images/til_laeren_small_bg.jpg'
import til_laeren_bg from '../assets/images/til_laeren_bg.jpg'


import Laerervejledning from '../assets/images/pdf/tilLaererne/Laerervejledning.pdf'
import Uformel_laering from '../assets/images/pdf/tilLaererne/Uformel_laering.pdf'
import Faelles_maal from '../assets/images/pdf/tilLaererne/Faelles_maal.pdf'



export default () => (
  <Layout>
    <SEO title="Til lærerne" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6} className="divContent">
            <h1>Til lærerne</h1>
            <p>
              Her kan du finde en lærervejledning samt en oversigt over materialets anvendelighed i forhold til Fælles Mål.
              <br /><br />
              Derudover kan du løse en artikel om uformel læring, og om hvofor det er en god idé at komme ud af klasseværelset engang imellem.
              <br /><br />
              <a href = {Laerervejledning} target="_blank" rel="noreferrer">
                Lærervejledning
              </a>
              
              <br /><br />
              <a href = {Uformel_laering} target="_blank" rel="noreferrer">
                Uformel læring
              </a>
              
              <br /><br />
              <a href = {Faelles_maal} target="_blank" rel="noreferrer">
                Fælles mål
              </a>
              

              <br />
              <img src={til_laeren_small_bg} className="imgSize" alt="10.000.000 år gammel hajtand." />
              <br />
            <div className="frontSmallText">
            10.000.000 år gammel hajtand.
              <br />
              Fundet i Gram Lergrav.
            </div>
            </p>
            
            </Col>
            <Col md={6} className="divContent">
            <br /><br />
              <img src={til_laeren_bg} className="imgSize" alt="Til læreren" />
            </Col>
          </Row>
      
        </Container>
      </div>
  </Layout>
)
