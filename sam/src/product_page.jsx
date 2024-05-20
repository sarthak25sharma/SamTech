import React from 'react';
import './product_page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero_Products from './hero_products.jsx'
function ProductSection() {
  return (
    <div>
    <Hero_Products/>
    <div className="container">
      
      <h1 className="main-heading">Aluminium & Copper wound distribution</h1>
      <div className="main-products">
       
        <hr></hr>
        <div className="ratings">
          <h1>Ratings of Transformer supported by us</h1>
          <div className="list-group">
            <label className="list-group-item d-flex gap-2">
              <span>
                16KVA
                <small className="d-block text-body-secondary">With support text underneath to add more detail</small>
              </span>
            </label>
            <label className="list-group-item d-flex gap-2">
              <span>
                25 KVA
                <small className="d-block text-body-secondary">Some other text goes here</small>
              </span>
            </label>
            <label className="list-group-item d-flex gap-2">
              <span>
                63 KVA
                <small className="d-block text-body-secondary">And we end with another snippet of text</small>
              </span>
            </label>
            <label className="list-group-item d-flex gap-2">
              <span>
                100KVA
                <small className="d-block text-body-secondary">And we end with another snippet of text</small>
              </span>
            </label>
          </div>

          <div className="list-group">
            <label className="list-group-item d-flex gap-2">
              <span>
                160 KVA
                <small className="d-block text-body-secondary">With support text underneath to add more detail</small>
              </span>
            </label>
            <label className="list-group-item d-flex gap-2">
              <span>
                250 KVA
                <small className="d-block text-body-secondary">Some other text goes here</small>
              </span>
            </label>
            <label className="list-group-item d-flex gap-2">
              <span>
                315 KVA
                <small className="d-block text-body-secondary">And we end with another snippet of text</small>
              </span>
            </label>
            <label className="list-group-item d-flex gap-2">
              <span>
                400 KVA
                <small className="d-block text-body-secondary">And we end with another snippet of text</small>
              </span>
            </label>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="position-relative overflow-hidden text-center bg-body-tertiary">
        <div className="other-image">
          <h1 className="display-1 fw-bold">Other Products</h1>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="other-products">
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {[
                'Variable Voltage Transformer',
                'Industrial Transformer',
                'Oil Cooled Transformer',
                'Variable Auto Transformer',
                'Isolation Transformer',
                'Control Transformer',
                'Three Phase Isolation Transformer',
                'Single Phase Isolation Transformer',
                'Dry Air Cooled Transformer'
              ].map((product, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h3>{product}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductSection;
