import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"
import artikler_bg from '../assets/images/artikler_bg.jpg'
import pdf1 from '../assets/images/pdf/En_dramatisk_graense.pdf'
import pdf2 from '../assets/images/pdf/Koralrevet_ved_Faxe.pdf'
import pdf3 from '../assets/images/pdf/Kridttiden.pdf'
import pdf4 from '../assets/images/pdf/om_megalodon.pdf'


export default () => (
  <Layout>
    <SEO title="Home" />
      
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">

            <Col md={6} className="divContent">
            <h1>Artikler</h1>
<p>
  Her kan du finde en række artikler, der går et spadestik dybere end skoleavisen. Det kan være en god idé at blade avisen igennem og finde det emne, der interesserer dig mest, og bagefter finde den artikel her, der uddyber lige præcis det emne.
</p>
 
<p>
Der er artikler til tiden for 70, 65, 63, 55 og 10 millioner år siden.
</p>
<p>
”<a href = {pdf1} target="_blank" rel="noreferrer">En omstridt grænse</a>”
<br />
  Handler om katastrofen for 65 millioner år siden, da en kæmpe meteor ramte jorden. Passer til side 6-7 i skoleavisen.
</p>
<p>
  ”<a href = {pdf2} target="_blank" rel="noreferrer">
  Koralrevet ved Faxe
  </a>”
<br />
  Handler om de nye livsformer, der dukkede op for ca. 63 millioner år siden – lige efter katastrofen med meteornedslaget. Passer til side 8-9 i skoleavisen.
</p>
<p>
  ”<Link to ="/fur">
  Klimaforandring på vulkansk kulkraft
  </Link>”
<br />
  Handler om gigantiske vulkanudbrud i Nordatlanten for 55 millioner år siden. Passer til side 10-11 i skoleavisen.
</p>
<p>
  ”<a href = {pdf3} target="_blank" rel="noreferrer">
    Hav over hele Danmark med dræberøgler og tropisk liv
  </a>”
<br />  
  Handler om kridttiden for ca. 70 millioner år siden. Passer til side 4-5 i skoleavisen.
</p>
<p>

  ”<a href = {pdf4} target="_blank" rel="noreferrer">
  Hvalerne i Gram
  </a>”
  <br />
  Handler om Gram-ler, hvaler og verdens største haj gennem tiderne. Passer til side 12-13 i skoleavisen.              
</p>
            

            </Col>
            <Col md={6} className="divContent">
            <br /><br /><br />
            <img src={artikler_bg} className="imgSize" alt="Logo" />
            </Col>
          </Row>
      
        </Container>
      </div>
  </Layout>
)
