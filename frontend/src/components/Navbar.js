import React, { Fragment } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'


const Navbar = ({cartItems}) => {
  return (
   <Fragment>
     <nav className="navbar conatiner row bg-primary">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to={'/'}>
          <img width="150px" alt='LOGO' className='rounded' src="/images/logo.png" />
          </Link>
          

        </div>
      </div>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
             <span className="navbar-toggler-icon"></span>
         </button> */}

      <div className="col-12 col-md-6  mt-2 mt-md-0">
        <div className="input-group ">
          <Search/>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to={'/cart'}><h4 className='text-decoration-none'>🛒 </h4><span id="cart_count" className="bg-warning px-1 rounded text-decoration-none ">{cartItems.length}</span>
                     
              
          


        </Link>
     
        
      </div>
    </nav>
   </Fragment>

  )
}

export default Navbar