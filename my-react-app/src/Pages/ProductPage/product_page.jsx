import React from 'react';
import "./product_page.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function ProductSection() {
  return (
    <div className='container'>
      <h1 className='main-heading'> Aluminium  & Copper wound distribution</h1>
      <div className='main-products'>
        <div className='card-div'>
        <div className="card mb-3" >
          <div className="row g-0 border-0">
            <div className="image-col border-0">
              <img src="./thumbnail.jpg" className="img-fluid mx-auto " alt="..." />
            </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Card title</h2>
              <p className="card-textm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ab dolore perferendis similique iste possimus cupiditate modi dignissimos, aliquid et, pariatur, animi alias facere id quisquam excepturi. Aperiam, doloribus voluptas..</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='ratings'>
        
          <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
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
    </div>

      
      <div>
        <div className="position-relative overflow-hidden  text-center bg-body-tertiary">
        <div className=" other-image">
          <h1 className="display-1 fw-bold">Other Products</h1>
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      </div>

      <div className='other-products'>
        <div class="album py-5 ">
          <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <div class="card-body">
                  <h3>Variable Voltage Tranfromer</h3>
                  
                  <div class="d-flex justify-content-between align-items-center"> 
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <div class="card-body">
                <h3>Industrial Transformer</h3>
                  
                  <div class="d-flex justify-content-between align-items-center">
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                
                <div class="card-body">
                <h3>Oil Cooled Transformer</h3>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                
                <div class="card-body">
                <h3>Variable Auto Tranfromer</h3>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                
                <div class="card-body">
                <h3>Isolation Transformer</h3>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                
                <div class="card-body">
                <h3>Control Transformer </h3>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                
                <div class="card-body">
                <h3>Three Phase Isolation Tranfromer</h3>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
              
                <div class="card-body">
                <h3>Sinlge Phase Isolation Tranfromer</h3>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
              
                <div class="card-body">
                <h3>Dry air cooled Tranfromer</h3>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    
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

export default ProductSection;