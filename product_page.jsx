import React from 'react';
import "./product_page.css";
function ProductSection() {
  return (
    
    <div className="row">
      <div className='heading-div'>
            <hr/>
            <h1 className='heading'>PLACEHOLDER</h1>
            <hr/>
      </div>
  
      <div className= "mb-4 bg-body-tertiary rounded-3 product-text row featurette flex-md-row-reverse">
          <div className="col-md-7">
            <h2 className=" f-normal featurette-heading fw-normal lh-1">Featurette heading.<span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eum repellat similique molestiae sint quis esse provident dicta, perspiciatis magnam aperiam quasi, iste laborum, alias aliquam natus sed tenetur. Fugiat..</p>
          </div>
          <div className=" col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"  src="./Hero.jpg" alt="" >
            </img>
          </div>
      </div>
      <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-4 text-bg-dark rounded-3">
              <h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, explicabo debitis corporis praesentium iste cumque repellat hic placeat facilis nulla maxime illo perspiciatis. Autem impedit voluptates corporis ut consectetur quibusdam.
              </h2>
            </div>
          </div>
        
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima labore non quo pariatur deserunt accusantium, libero corporis odit velit neque placeat id illo quia praesentium vel, hic sequi inventore iste.
              </h2>
              
            </div>
          </div>
      </div>
        <div className= " product-text row featurette flex-md-row-reverse">
          
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"  src="./Hero.jpg" alt="">
            </img>
          </div>
          <div className="col-md-7">
            <h2 className=" f-normal featurette-heading fw-normal lh-1">Featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eum repellat similique molestiae sint quis esse provident dicta, perspiciatis magnam aperiam quasi, iste laborum, alias aliquam natus sed tenetur. Fugiat..</p>
          </div>
        </div>
        <div className= " product-text row featurette flex-md-row-reverse">
          <div className="col-md-7">
            <h2 className=" f-normal featurette-heading fw-normal lh-1">Featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eum repellat similique molestiae sint quis esse provident dicta, perspiciatis magnam aperiam quasi, iste laborum, alias aliquam natus sed tenetur. Fugiat..</p>
          </div>
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"  src="./Hero.jpg" alt="">
            </img>
          </div>
        </div>
       
    </div>
    
  );
}

export default ProductSection;
