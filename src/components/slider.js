import React from "react";
import Slider from "react-slick";
import styled from "styled-components"

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import skoleavis1 from "../assets/images/skoleavisen/Skoleavisen_1-1.jpg"
import skoleavis2 from "../assets/images/skoleavisen/Skoleavisen_2-2.jpg"
import skoleavis3 from "../assets/images/skoleavisen/Skoleavisen_3-3.jpg"
import skoleavis4 from "../assets/images/skoleavisen/Skoleavisen_4-4.jpg"
import skoleavis5 from "../assets/images/skoleavisen/Skoleavisen_5-5.jpg"
import skoleavis6 from "../assets/images/skoleavisen/Skoleavisen_6-6.jpg"
import skoleavis7 from "../assets/images/skoleavisen/Skoleavisen_7-7.jpg"
import skoleavis8 from "../assets/images/skoleavisen/Skoleavisen_8-8.jpg"
import skoleavis9 from "../assets/images/skoleavisen/Skoleavisen_9-9.jpg"
import skoleavis10 from "../assets/images/skoleavisen/Skoleavisen_10-10.jpg"

import skoleavis11 from "../assets/images/skoleavisen/Skoleavisen_11-11.png"
import skoleavis12 from "../assets/images/skoleavisen/Skoleavisen_12-12.png"
import skoleavis13 from "../assets/images/skoleavisen/Skoleavisen_13-13.png"
import skoleavis14 from "../assets/images/skoleavisen/Skoleavisen_14-14.png"
import skoleavis15 from "../assets/images/skoleavisen/Skoleavisen_15-15.png"
import skoleavis16 from "../assets/images/skoleavisen/Skoleavisen_16-16.png"
import skoleavis17 from "../assets/images/skoleavisen/Skoleavisen_17-17.png"
import skoleavis18 from "../assets/images/skoleavisen/Skoleavisen_18-18.png"
import skoleavis19 from "../assets/images/skoleavisen/Skoleavisen_19-19.png"
import skoleavis20 from "../assets/images/skoleavisen/Skoleavisen_20-20.png"

import skoleavis21 from "../assets/images/skoleavisen/Skoleavisen_21-21.png"
import skoleavis22 from "../assets/images/skoleavisen/Skoleavisen_22-22.png"
import skoleavis23 from "../assets/images/skoleavisen/Skoleavisen_23-23.png"
import skoleavis24 from "../assets/images/skoleavisen/Skoleavisen_24-24.png"


const SliderContainer = styled.div`
  background: #FFF;
  color: white;
  padding: 0 0;
`

export default () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // const sideMetadata = useStaticQuery(graphql`
  //   query TitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         author
  //       }
  //     }
  //   }
  // `)
  //let {title, author} = sideMetadata.site.siteMetadata

  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <div className="text-center">
            <img src={skoleavis1} alt="side 1"/>
          </div>
        </div>
        <div>
        <div className="text-center">
            <img src={skoleavis2} alt="side 2" />
          </div>
        </div>
        <div>
          <div className="text-center">
          <img src={skoleavis3} alt="side 3" />
          </div>
        </div>        
        <div>
          <div className="text-center">
          <img src={skoleavis4} alt="side 4" />
          </div>
        </div>        
        <div>
          <div className="text-center">
          <img src={skoleavis5} alt="side 5" />
          </div>
        </div>        
        <div>
          <div className="text-center">
          <img src={skoleavis6} alt="side 6" />
          </div>
        </div>        
        <div>
          <div className="text-center">
          <img src={skoleavis7} alt="side 7" />
          </div>
        </div>        
        <div>
          <div className="text-center">
          <img src={skoleavis8} alt="side 8" />
          </div>
        </div>        
        <div>
          <div className="text-center">
          <img src={skoleavis9} alt="side 9" />
          </div>
        </div>        
        <div>
          <div className="text-center">
          <img src={skoleavis10} alt="side 10" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis11} alt="side 11" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis12} alt="side 12" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis13} alt="side 13" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis14} alt="side 14" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis15} alt="side 15" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis16} alt="side 16" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis17} alt="side 17" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis18} alt="side 18" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis19} alt="side 19" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis20} alt="side 20" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis21} alt="side 21" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis22} alt="side 22" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis23} alt="side 23" />
          </div>
        </div>
        <div>
        <div className="text-center">
          <img src={skoleavis24} alt="side 24" />
          </div>
        </div>


      </Slider>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Forrige</span>
</a>
<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Næste</span>
</a>
    </SliderContainer>
  )
}