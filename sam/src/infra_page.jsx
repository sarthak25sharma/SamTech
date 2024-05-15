import './infra_page.css';

const InfraPage = () => {
  return (
    <div className="about-us-container">
      <div>
        <hr></hr>
      <h1 className='h1main' >ABOUT OUR COMPANY</h1>
      <hr></hr>
      </div>
      <section className="company-info">
        <div className="company-info-content">
          <p>
            Samtech Industries, established in 1996, has grown into a leading provider of comprehensive electrical solutions. 
            <br/>
            <br/>We specialize in manufacturing, repairing, and supplying power & distribution transformers, electrical hardware, and lines & substations. 
          </p>
          <br/>
          <p>
            Our commitment to quality is reflected in our ISO 9001:2000 certification and BIS registration. We are also an approved MES Contractor and a trusted vendor for reputed organizations like MVVNL, DVVNL, PuVVNL, KEI, TATA, and LARSEN & TOUBRO.
          </p>
        </div>
        <div className="company-info-image">
          <img src='./Hero.jpg' alt="Company" />
        </div>
      </section>

      <hr></hr>
      <h1 className='h1main' >OUR PATNERS</h1>
      <hr></hr>
      <section className="photos">
  <div className="photo-gallery">
    <div className="card">
    <img src="https://i0.wp.com/complainthub.org/wp-content/uploads/2024/02/MVVNL-Logo.png?fit=720%2C480&ssl=1" alt="MVVNL" />
      <div className="card-content">
        <p>Madhyanchal Vidyut Vitaran Nigam Ltd. <br/>A Government of U.P. Undertaking</p>
      </div>
    </div>
    <div className="card">
    <img src="https://i0.wp.com/complainthub.org/wp-content/uploads/2024/02/DVVNL-Logo.png?fit=720%2C480&ssl=1" alt="DVVNL" />
      <div className="card-content">
        <p>Dakshinanchal Vidyut Vitran Nigam Ltd.<br/>
        Uttar Pradesh Power Corporation Ltd.
        </p>
      </div>
    </div>
    <div className="card">
      <img src="https://i0.wp.com/complainthub.org/wp-content/uploads/2024/02/PuVVNL-Logo.png?fit=720%2C480&ssl=1" alt="PuVVNL" />
      <div className="card-content">
        <p>PURVANCHAL VIDYUT VITRAN NIGAM LTD.
          <br/> 
        </p>
      </div>
    </div>
    <div className="card">
      <img src="data:image/png;base64,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" alt="KEI" />
      <div className="card-content">
        <p>Krishna Electrical Industries</p>
      </div>
    </div>
    <div className="card">
      <img src="https://newsmantra.in/wp-content/uploads/2024/03/tata-power-q2-net-profit-up-9-yoy-at-rs-1017-cr-1.webp" alt="TATA POWER" />
      <div className="card-content">
        <p>Tata Power Company Limited</p>
      </div>
    </div>
    <div className="card">
      <img src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-93811,resizemode-75,msid-76824902/news/company/corporate-trends/lt-rejigs-board-roles-as-a-director-will-retire.jpg" alt="L&T" />
      <div className="card-content">
        <p>Larsen & Toubro Limited</p>
      </div>
    </div>
  </div>
</section>

<div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
  <div className="col d-flex flex-column align-items-start gap-2">
    <h1 className="h1maininfra">OUR INFRASTRUCTURE </h1>
    <p className="infratext text-body-secondary">At Samtech Industries, we understand the critical role transformers play in your
electrical infrastructure. That's why we're dedicated to providing you with
industry-leading transformer solutions designed to meet your specific needs and
exceed expectations.</p>
    
  </div>

  <div className="col">
    <div className="row row-cols-1 row-cols-sm-2 g-4">
      <div className="col d-flex flex-column gap-2">
        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
          <svg className="block" width="1em" height="1em">
            
          </svg>
        </div>
        <h4 className="fw-semibold mb-0 text-body-emphasis">Exceptional Efficiency</h4>
        <p className="infratext text-body-secondary"> Our transformers are
designed to minimize energy losses,saving you
money on your operating costs</p>
      </div>

      <div className="col d-flex flex-column gap-2">
        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
          <svg className="bi" width="1em" height="1em">
            <use xlinkHref="#gear-fill"></use>
          </svg>
        </div>
        <h4 className="fw-semibold mb-0 text-body-emphasis">Unmatched Durability</h4>
        <p className="infratext text-body-secondary">Built with robust
construction and premium materials, Samtech
transformers are built to withstand even the
most demanding environments..</p>
      </div>

      <div className="col d-flex flex-column gap-2">
        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
          <svg className="bi" width="1em" height="1em">
            <use xlinkHref="#speedometer"></use>
          </svg>
        </div>
        <h4 className="fw-semibold mb-0 text-body-emphasis">Competitive Pricing</h4>
        <p className="infratext  text-body-secondary">Our transformers are
designed to minimize energy losses,saving you
money on your operating costs</p>
      </div>

      <div className="col d-flex flex-column gap-2">
        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
          <svg className="bi" width="1em" height="1em">
            <use xlinkHref="#table"></use>
          </svg>
        </div>
        <h4 className="fw-semibold mb-0 text-body-emphasis">Rigorous Testing</h4>
        <p className="infratext text-body-secondary">Our transformers undergo
comprehensive testing at recognized and
authorized laboratories like CPRI and ERDA, ensuring they meet the highest safety and
performance standards.</p>
      </div>
    </div>
  </div>
</div>


  <hr />
  <h1 className='h1main' >OUR FOUNDERS</h1>

<div className=" founder row g-4 py-5 row-cols-1 row-cols-lg-3">
  <div className="feature col">
    <div className=" fimg feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
      <img className='w-50 h-50' src='./f1.jpg' alt='founder1'/>
    </div>
    <div>
      
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    
    </div>
    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    
  </div>

  <div className="feature col">
    <div className="fimg feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
      <img className='w-50 h-50' src='./f1.jpg' alt='founder2'/>
    </div>
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    
  </div>

  <div className="feature col">
    <div className="fimg feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
    <img  className='w-50 h-50' src='./f1.jpg' alt='founder3'/>
    </div>
    <h3 className="fs-2 text-body-emphasis">Featured title</h3>
    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    
  </div>
</div>














    </div>
  );
}

export default InfraPage;
