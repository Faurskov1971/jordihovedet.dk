import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import styled from "styled-components"
import img1 from "../assets/images/logo_moen.jpg"
import img2 from "../assets/images/logo_fur.jpg"
import img3 from "../assets/images/logo_oestsjaelland.jpg"
import img4 from "../assets/images/logo_soenderjylland.jpg"

const Footer = styled.footer`
  padding: 3rem 0;
  background: #f8f9fa;
  a, a:hover {
    color: inherit;
  }
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
      a, a:hover {
        color: inherit;
      }
    }
  }
`

export default () => (
  <Footer>
    <Container>
      <Row>
        <Col md={7}>
        </Col>
        <Col md={1}>
    <a href="https://moensklint.dk/" target="_blank" rel="noopener noreferrer" >
    <figure>
      <img src={img1} width="93" height="72" alt="Geocenter Møn" />
    </figure>
        </a>
    </Col>
    <Col md={1}>
    <a href="https://furmuseum.dk" target="_blank" rel="noopener noreferrer" >
    <figure>
      <img src={img2} width="84" height="72" alt="Fur museum" />
    </figure>
    </a>
    </Col>
    <Col md={2}>
    <a href="https://www.aabne-samlinger.dk/" target="_blank" rel="noopener noreferrer" >
    <figure>
      <img src={img3} width="196" height="72" alt="Østjyllands museum" />
    </figure>
    </a>
    </Col>
    <Col md={1}>
    <a href="https://msj.dk/" target="_blank" rel="noopener noreferrer" >
    <figure>
      <img src={img4} width="98" height="71" alt="Museum Sønderjylland"/>
    </figure>
    </a>
        </Col>
      </Row>
    </Container>
  </Footer>
)
