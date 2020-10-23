import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"
import film1 from '../assets/images/film_gram_pix_1.jpg'
import film2 from '../assets/images/film_faxe_pix_1.jpg'
import film3 from '../assets/images/film_fur_pix_1.jpg'
import film4 from '../assets/images/film_moen_pix_1.jpg'


export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
          <Col md={12} className="divContent">
          <h1>Film</h1>
            <p>
            Jordihovedet.dk har sendt et kamerahold rundt til de fire museer og besøgscentre, der står bag projektet.
            </p>
            </Col>
          <Col md={3} className="divContent">
          
          <ul>
            <li><Link to="/film_1">Geocenter Møns klint</Link></li>
            <li><Link to="/film_2">Fur Museum</Link></li>
            <li><Link to="/film_3">Østjyllands Museum</Link></li>
            <li><Link to="/film_4">Museum Sønderjylland Gram</Link></li>
          </ul>
            
          </Col>
            <Col md={9} className="divContent">
  
                <Link to="/film_1">
                  <img src={film1} className="floatLeft" alt="Geocenter Møns klint"/>
                </Link>
                <div className="filmInfobox">
                  <p>
                  <strong>GeoCenter Møns Klint</strong><br />
                    Se filmen om en skoletjeneste lidt udover det sædvanlige.
                    <br /><br />
                    <Link to="/film_1">Klik her for at se filmen</Link>
                  </p>             
                </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col md={3} className="divContent"></Col>
            <Col md={9} className="divContent">
                <Link to="/film_2">
                  <img src={film2} className="floatLeft" alt="Geocenter Møns klint"/>
                </Link>
                <div className="filmInfobox">
                  <p>
                  <strong>Fur Museum</strong><br />
                    Se filmen om en skoletjeneste lidt udover det sædvanlige.
                    <br /><br />
                    <Link to="/film_2">Klik her for at se filmen</Link>
                  </p>
                </div>
            </Col>
          </Row>


          <Row className="d-flex justify-content-center">
            <Col md={3} className="divContent"></Col>
            <Col md={9} className="divContent">
                <Link to="/film_3">
                  <img src={film3} className="floatLeft" alt="Geocenter Møns klint"/>
                </Link>
                <div className="filmInfobox">
                  <p>
                  <strong>Østsjællands Museum</strong><br />
                    Se filmen om en skoletjeneste lidt udover det sædvanlige.
                    <br /><br />
                    <Link to="/film_3">Klik her for at se filmen</Link>
                  </p>
                </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col md={3} className="divContent"></Col>
            <Col md={9} className="divContent">
                <Link to="/film_4">
                  <img src={film4} className="floatLeft" alt="Geocenter Møns klint"/>
                </Link>
                <div className="filmInfobox">
                  <p>
                  <strong>Sønderjylland Gram</strong><br />
                    Se filmen om en skoletjeneste lidt udover det sædvanlige.
                    <br /><br />
                    <Link to="/film_4">Klik her for at se filmen</Link>
                  </p>
                </div>
            </Col>
          </Row>

      
        </Container>
      </div>
  </Layout>
)
