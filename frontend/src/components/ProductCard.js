import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {
  return (
    <>
  

  <div className="col-sm-12 col-md-6 col-lg-3 my-3">
  <div className="card mx-2 p-3 rounded border-0 shadow-sm h-100 transition">

    <div className="d-flex justify-content-center">
      <img className="card-img-top img-fluid" src={product.images[0].image} alt="Product" style={{ maxHeight: "180px", objectFit: "contain" }} />
    </div>

    <div className="card-body d-flex flex-column text-center">

      <h5 className="card-title">
        <Link to={"/product/"+product._id} className="text-decoration-none text-dark fw-bold">{product.name}</Link>
      </h5>

 
      <div className="ratings mt-auto">
        <div className="rating-outer">
          <div className="rating-inner" style={{width:`${(product.ratings/5)*100}%`}}></div>
        </div>
      </div>

      <p className="card-text text-dark fs-5 fw-semibold">{product.price}</p>

      
      <Link to={"/product/"+product._id} className="btn btn-dark w-100 fw-semibold">
  View Details
</Link>


    </div>
  </div>
</div>

        
   
   
    </>

  )
}

export default ProductCard