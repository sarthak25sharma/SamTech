import React from "react";
import "./product_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
function ProductSection() {
  return (
    <>
      <div className="container">
        <h1 className="main-heading"> Quality Testing</h1>
        <div className="main-products">
          <div className="card-div">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="image-col">
                  <img src="./Hero.jpg" className="img-fluid " alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">Testing</h2>
                    <p className="card-textm display-6">
                      At Samtech Industries, we prioritize the reliability and
                      performance of our transformers. To achieve this, we
                      implement a comprehensive testing program throughout the
                      entire manufacturing process.Samtech Industries Beyond
                      these, additional tests include oil dielectric tests, air
                      pressure tests, vacuum tests, oil leakage tests, and flash
                      and fire tests. This comprehensive testing program ensures
                      every Samtech transformer delivers unmatched reliability
                      and meets the most stringent safety standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ratings">
            <div className="d-flex flex-column flex-md-column p-4 gap-4 py-md-5 align-items-center justify-content-center">
              <div
                className="align-item-center justify-items-center"
                style={{ backgroundImage: "" }}
              >
                <h1>Uncompromising Testing Procedures</h1>
              </div>
              <div className="list-group gap-4">
                <label className="list-group-item d-flex gap-2">
                  <span>
                    Multi Stage Testing
                    <small className="d-block text-body-secondary">
                      Our transformers undergo a series of routine tests at
                      every stage of design, development, and manufacturing.
                      This ensures potential issues are identified and addressed
                      early on, preventing them from impacting the final product
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <span>
                    Meeting Specific Requirements
                    <small className="d-block text-body-secondary">
                      We offer Transformers type tested at accredited external
                      labs like CPRI and ERDA, these tests guarantee your
                      transformer meets industry standards in terms of losses
                      and efficiency.
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <span>
                    Transparency for Our Clients
                    <small className="d-block text-body-secondary">
                      We believe in fostering trust with our clients. That's why
                      we encourage them to witness all routine testing
                      procedures, providing complete transparency into the
                      rigorous quality control measures employed for each
                      transformer.
                    </small>
                  </span>
                </label>
              </div>
              <div
                style={{ backgroundImage: "" }}
                className="align-item-center"
              >
                <h2>Advanced Testing Capabilities</h2>
              </div>

              <div className="list-group gap-4">
                <label className="list-group-item d-flex gap-2">
                  <span>
                    01.
                    <small className="d-block text-body-secondary">
                      Ensuring Insulation Integrity: One crucial test performed
                      at Samtech Industries is insulation resistance
                      measurement. This test evaluates the effectiveness of the
                      insulating materials used within the transformer. Strong
                      insulation is vital to prevent electrical breakdowns and
                      ensure safe and efficient operation.
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <span>
                    02.
                    <small className="d-block text-body-secondary">
                      Verifying Voltage Transformation Accuracy: Another
                      critical test involves measuring the voltage ratio and
                      vector relationship. This test confirms that the
                      transformer accurately transforms voltage levels from
                      input to output while maintaining proper phase
                      relationships between the windings.
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <span>
                    03.
                    <small className="d-block text-body-secondary">
                      Evaluating Withstand Capability: Samtech transformers
                      undergo separate source voltage withstand and induced
                      over-voltage withstand tests. These tests simulate
                      potential voltage spikes and surges that may occur in
                      real-world applications. By subjecting the transformers to
                      these controlled over-voltages, we assess their ability to
                      withstand such transients without sustaining damage.
                    </small>
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <span>
                    04.
                    <small className="d-block text-body-secondary">
                      Optimizing Energy Efficiency: No-load loss and current
                      measurement tests are conducted to evaluate the
                      transformer's energy efficiency under no-load conditions.
                      These tests measure the amount of energy lost when the
                      transformer is energized but not delivering any load.
                    </small>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"
            style={{ backgroundImage: "" }}
          >
            <div className="col-md-6 p-lg-5 mx-auto my-5">
              <h1 className="display-3 fw-bold">Quality Assurance</h1>
              <h3 className="fw-normal text-muted mb-3">
                At Samtech Industries, we are driven by a singular commitment:
                exceeding customer expectations in every aspect of our business.
                This dedication to quality and service underpins everything we
                do, from the initial design phase to after-sales support.
              </h3>
              <div className="d-flex gap-3 justify-content-center lead fw-normal"></div>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div>
        </div>

        <div className="other-products">
          <div class="album py-5 ">
            <div class="container">
              <h2 className="">Uncompromising Quality from Start to Finish</h2>
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h3>Rigorous Material Selection: </h3>
                      <small className="d-block text-body-secondary">
                        We source our raw materials exclusively from established
                        and reputable vendors within the electrical field. Every
                        material undergoes strict in-house quality checks and
                        arrives with the necessary test certificates, ensuring
                        only the highest grade components are used in our
                        transformers.
                      </small>
                      <div class="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h3>Meticulous In-House Quality Control: </h3>
                      <small className="d-block text-body-secondary">
                        Our production processes are governed by a stringent
                        quality control system. State-of-the-art measuring
                        equipment, meticulously calibrated by NABL-approved
                        labs, guarantees precise and reliable testing throughout
                        production.
                      </small>

                      <div class="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h3>Continuous Quality Improvement: </h3>
                      <small className="d-block text-body-secondary">
                        We are relentless in our pursuit of excellence. An
                        internal sampling procedure and routine testing ensure
                        continuous quality monitoring, and we actively solicit
                        customer feedback to identify areas for further
                        improvement.
                      </small>
                      <div class="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h3>On-Time Delivery: </h3>
                      <small className="d-block text-body-secondary">
                        We understand the importance of adhering to project
                        timelines. Our commitment to efficient production
                        processes ensures your transformers are delivered when
                        you need them, keeping your project on track.
                      </small>

                      <div class="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <h3>Continuous Improvement Through Internal Audits: </h3>
                      <small className="d-block text-body-secondary">
                        We regularly review internal audit findings to identify
                        areas for improvement within our quality systems and
                        processes. This commitment to self-evaluation ensures we
                        consistently deliver the exceptional service and quality
                        our customers deserve.
                      </small>

                      <div class="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
