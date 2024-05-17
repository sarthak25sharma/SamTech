import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cover.css';
const Cover = () => {
  return (
    <div>
      <div className=" cover-div p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-lg-6 px-0">
          <h1  className='main-text'>Title of a longer featured blog post</h1>
          <p className="second-text lead my-3">
            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
          </p>
          
        </div>
      </div>
      <div className='cover-div'>
      <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
            <h3 className="mb-0">Featured post</h3>
            <div className="mb-1 text-body-secondary">Nov 12</div>
            <p className="card-text mb-auto">
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </p>
           
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
            <h3 className="mb-0">Post title</h3>
            <div className="mb-1 text-body-secondary">Nov 11</div>
            <p className="mb-auto">
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </p>
            
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default Cover;
