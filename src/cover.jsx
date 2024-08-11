import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cover.css';
import  transition from './transition';
const Cover = () => {
  return (
    <div>
      <div className=" cover-div p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className=" divh col-lg-6 px-0">
          <h1  className='main-text'>Our Journey</h1>
          <p className="second-text lead my-3">
          Samtech Industries was established in the year 1996 and is currently one of the leading manufacturers of Power & Distribution Transformers, Specialist in EPCof 33/11 KV Lines & SUb-stations and suppliers of Electrical Hardwares. Samtech is an ISO9001:2000certified companyand is committed towards quality in Work, Products and Services.  </p>
          
        </div>
      </div>
      <div className='cover-div'>
      <div className="row mb-2">
      <div className="col-md-6">
        <div className=" divh row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            
            <p className="card-text mb-auto">
            Samtech is an approved Vendor Contractor for State Electricity Boardsl Corporations in India & also approved.Contractors with DefenceServices (MES). 
            </p>
           
          </div>
          <div className="col-auto d-none d-lg-block">
          <img className="bd-placeholder-img" width="200" height="250" src="./img.jpg" alt="Description of the image" role="img" aria-label="Placeholder: Thumbnail" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="divh col p-4 d-flex flex-column position-static">
            <p className="mb-auto">
            Samtech is BIS registered Unit for manufacture of 11/0.433 KV Distribution Transformers upto EnergyEfficiency Level-I
            </p>
            
          </div>
          <div className="col-auto d-none d-lg-block">
          <img className="bd-placeholder-img" width="200" height="250" src="./imj.jpg" alt="Description of the image" role="img" aria-label="Placeholder: Thumbnail" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default transition(Cover);
