import React, { Fragment } from 'react'

const Navbar = () => {
  return (
   <Fragment>
     <nav className="navbar conatiner row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <img width="150px" className='rounded' src="/images/logo.png" />
        </div>
      </div>

      <div className="col-12 col-md-6  mt-2 mt-md-0">
        <div className="input-group ">
          <input
            type="text"
            id="search_field"
            className="form-control me-1 rounded"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <button className='btn btn-success'>
        <span id="cart" className="ml-3 me-1">Cart</span>
        <span className="ml-1" id="cart_count">2</span>

        </button>
        
      </div>
    </nav>
   </Fragment>

  )
}

export default Navbar