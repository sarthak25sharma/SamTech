import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import transition from './transition';

function Product() {
  return (
    <div className="container py-2">
      <header className="pb-1 mb-4 border-bottom">
        <hr/>
          <h2 className="heading">OUR PRODUCTS</h2>
      </header>

      <div className="mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5 ">
          <h1 className="display-5 fw-bold">Aluminium Distribution & Copper wound</h1>
          <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora consequatur similique harum inventore expedita, dicta dolorum explicabo dolore omnis amet maiores quos quas, illum totam molestiae perferendis ad dolor?</p>
          
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-4 text-bg-dark rounded-3">
            <h2>
              We offer a diverse range of transformers ranging from 
              variable voltage transformers to dry air cooled transformers
            </h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            
            <h2>
            With these we offer a plethora of options for 
              transformers ranging from 16KVA to 2000KVA in ratings
            </h2>
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default transition(Product);
