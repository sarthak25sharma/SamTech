import React from 'react';
import { CCarousel, CCarouselItem, CCarouselCaption } from '@coreui/react'; /*use npm install  @coreui/react*/
import './infra.css';

function Infra() {
  return (
    <div className="infra-container">
      <h2 className="infra-heading"><b>OUR INFRASTRUCTURE</b></h2>
      <CCarousel controls indicators dark>
        <CCarouselItem>
          <img className="d-block w-100" src={'./hero.jpg'} alt="slide 1" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Fist one</h5>
            <p>eat</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img className="d-block w-100" src={'./hero.jpg'} alt="slide 2" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second one</h5>
            <p>sleep</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img className="d-block w-100" src={'./hero.jpg'} alt="slide 3" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third one</h5>
            <p>repeat</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}

export default Infra;