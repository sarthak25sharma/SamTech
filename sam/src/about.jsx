import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero_About from './hero_about.jsx';
function AboutSection() {
  return (
    <div>
      <Hero_About/>
    <div className="container">
      <h1 className="main-heading">Quality Testing</h1>
      <div className="main-products">
        

        <div className="ratings">
          <div className="d-flex flex-column flex-md-column p-4 gap-4 py-md-5 align-items-center justify-content-center">
            <div className="align-items-center justify-content-center">
              <h1>Uncompromising Testing Procedures</h1>
            </div>
            <div className="list-group gap-4">
              <label className="list-group-item d-flex gap-2">
                <span>
                  Multi Stage Testing
                  <small className="d-block text-body-secondary">
                    Our transformers undergo a series of routine tests at every stage of design, development, and manufacturing. This ensures potential issues are identified and addressed early on, preventing them from impacting the final product.
                  </small>
                </span>
              </label>
              <label className="list-group-item d-flex gap-2">
                <span>
                  Meeting Specific Requirements
                  <small className="d-block text-body-secondary">
                    We offer Transformers type tested at accredited external labs like CPRI and ERDA, these tests guarantee your transformer meets industry standards in terms of losses and efficiency.
                  </small>
                </span>
              </label>
              <label className="list-group-item d-flex gap-2">
                <span>
                  Transparency for Our Clients
                  <small className="d-block text-body-secondary">
                    We believe in fostering trust with our clients. That's why we encourage them to witness all routine testing procedures, providing complete transparency into the rigorous quality control measures employed for each transformer.
                  </small>
                </span>
              </label>
            </div>
            <div className="align-items-center">
              <h2>Advanced Testing Capabilities</h2>
            </div>
            <div className="list-group gap-4">
              <label className="list-group-item d-flex gap-2">
                <span>
                  01.
                  <small className="d-block text-body-secondary">
                    Ensuring Insulation Integrity: One crucial test performed at Samtech Industries is insulation resistance measurement. This test evaluates the effectiveness of the insulating materials used within the transformer. Strong insulation is vital to prevent electrical breakdowns and ensure safe and efficient operation.
                  </small>
                </span>
              </label>
              <label className="list-group-item d-flex gap-2">
                <span>
                  02.
                  <small className="d-block text-body-secondary">
                    Verifying Voltage Transformation Accuracy: Another critical test involves measuring the voltage ratio and vector relationship. This test confirms that the transformer accurately transforms voltage levels from input to output while maintaining proper phase relationships between the windings.
                  </small>
                </span>
              </label>
              <label className="list-group-item d-flex gap-2">
                <span>
                  03.
                  <small className="d-block text-body-secondary">
                    Evaluating Withstand Capability: Samtech transformers undergo separate source voltage withstand and induced over-voltage withstand tests. These tests simulate potential voltage spikes and surges that may occur in real-world applications. By subjecting the transformers to these controlled over-voltages, we assess their ability to withstand such transients without sustaining damage.
                  </small>
                </span>
              </label>
              <label className="list-group-item d-flex gap-2">
                <span>
                  04.
                  <small className="d-block text-body-secondary">
                    Optimizing Energy Efficiency: No-load loss and current measurement tests are conducted to evaluate the transformer's energy efficiency under no-load conditions. These tests measure the amount of energy lost when the transformer is energized but not delivering any load.
                  </small>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="quality-assurance">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Quality Assurance</h1>
            <h3 className="fw-normal text-muted mb-3">
              At Samtech Industries, we are driven by a singular commitment: exceeding customer expectations in every aspect of our business. This dedication to quality and service underpins everything we do, from the initial design phase to after-sales support.
            </h3>
          </div>
        </div>
      </div>

      <div className="other-products">
        <div className="album py-5">
          <div className="container">
            <hr></hr>
            <h2 className="h2main">Uncompromising Quality from Start to Finish</h2>
            <hr></hr>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="h3main">Rigorous Material Selection</h3>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="h3main">Meticulous In-House Quality Control</h3>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="h3main">Continuous Quality Improvement</h3>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="h3main">On-Time Delivery</h3>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h3 className="h3main">Continuous Improvement By Internal Audits</h3>
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutSection;
