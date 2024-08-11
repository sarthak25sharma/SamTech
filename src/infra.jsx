import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import transition from './transition';
const Infra = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="./thumbnail.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            ABOUT INFRASTRUCUTER
          </h1>
          <p className="lead">
          Our company operates from a state-of-the-art facility featuring a spacious manufacturing floor for transformer production, a dedicated testing and quality assurance area, and modern office spaces for administrative and customer service teams.
          </p>

        </div>
      </div>
    </div>
  );
};

export default transition(Infra);
