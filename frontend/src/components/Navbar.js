import React, { Fragment } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <Fragment>
     <nav className="navbar conatiner row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to={'/'}>
          <img width="150px" alt='LOGO' className='rounded' src="/images/logo.png" />
          </Link>
          

        </div>
      </div>

      <div className="col-12 col-md-6  mt-2 mt-md-0">
        <div className="input-group ">
          <Search/>
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