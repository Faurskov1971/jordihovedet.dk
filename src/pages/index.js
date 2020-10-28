import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import index_logo from '../assets/images/index_logo.jpg'
import forside_small_bg from "../assets/images/forside_small_bg.jpg"
import Link from "../components/link"

export default () => (
  <Layout>
    <SEO title="Home" />    
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6} className="divContent">
              <img src={index_logo} className="imgSize" alt="Logo" />
            </Col>

            <Col md={6} className="divContent">
            <h1>Velkommen til Jord i Hovedet</h1>
            <p>
              Geologi er spændende og underholdende. Det, håber vi, går op for dig, når du surfer rundt på denne hjemmeside eller fordyber dig i skoleavisen, vi har udgivet til projektet.
              Det er Danmarks geologiske historie, det handler om. Det er en meget lang og spændende historie, som man kan beskæftige sig med hele livet, hvis det skulle være.
              Vi har valgt en række højdepunkter ud og gjort det lidt nemmere for dig at få jord i hovedet – ligesom vi har det.
              <br />
            <br />
            </p>
              <Row className="d-flex justify-content-center">
                      <Col md={6} className="divContent">
                        God fornøjelse!
                        <br /><br />
                        Venlig hilsen
                        <br /><br />
                        Jordihovedet.dk
                      </Col>

                      <Col md={6} className="frontSmallText">
                        <img src={forside_small_bg} alt="Forstenet søpindsvin" />
                        <br />
                        Forstenet søpindsvin.<br />
                        Fundet ved Møns Klint             
                      </Col>
              </Row>
            
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
              <Col md={4} className="paddingLeft">
              <div className="kasse">
              <div className="kasseLeft">
                <img src="images/forside_ikon_landkort.jpg" alt="landkort" />
              </div>
              <div className="kasseRight">
              <span className="kasseHeading">Tag på ekspedition!</span>
              <br />
              Geologi er spændende i klasseværelset, men det er endnu mere spændende selv at besøge Danmarks geologiske seværdigheder. Tjek et bredt udvalg ud her!
              <br />
              <Link to="/danmarkskort">Klik her</Link>
              </div>
            </div>
              </Col>
              <Col md={4}>
                  
      <div className="kasse">
      <div className="kasseLeft">
        <img src="images/forside_ikon_film.jpg" alt="film" />
      </div>
      <div className="kasseRight"> 	
      <span className="kasseHeading">Geo-trailere!</span>
      <br />
      Jordihovedet.dk har sendt et kamerahold rundt til de fire museer og besøgscentre, der står bag projektet. Se, hvad man kan opleve!
      <br />
      <Link to="/film">Klik her</Link>
      </div>
      </div>  
              </Col>
              <Col md={4} className="paddingRight">
              <div className="kasse">
          <div className="kasseLeft">
            <img src="images/forside_ikon_quiz.jpg" alt="quiz" />
          </div>
            <div className="kasseRight">
      <span className="kasseHeading">Geo-quiz</span>
      <br />
      Hvem har mest jord i hovedet?
      <br />
      <Link to="/quiz">Klik her</Link>
      </div>
</div>
              </Col>
            </Row>          
        </Container>
      </div>
  </Layout>
)
