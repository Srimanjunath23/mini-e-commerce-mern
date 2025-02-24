import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product,setproduct]=useState(null);
    const {id}=useParams();
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL +'/product/'+id)
        .then((res)=>res.json())
        .then((res)=>setproduct(res.product))
    
      },[])
  return (
   
    product && <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 mt-4 " id="product_image">
                <img src={product.images[0].image} className='rounded me-2' alt="sdf" height="500" width="500"/>
            </div>
 
            <div className="col-12 col-lg-5 mt-5">
                <h3>{product.name}</h3>
                <p id="product_id"></p>

                <hr/>

                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
           

                <hr/>

                <p id="product_price">{product.price}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus">-</span>

                    <input type="number" className="form-control count d-inline" value="1" readOnly />

                    <span className="btn btn-primary plus">+</span>
                </div>
                 <button type="button"  className="btn btn-dark d-inline ml-4 ms-3">Add to Cart</button>

                <hr/>

                <p>Status: <span id="stock_status">In Stock</span></p>

                <hr/>

                <h4 className="mt-2">Description:</h4>
                <p>{product.description}</p>
                <hr/>
                <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
				
                <div className="rating w-50"></div>
						
            </div>

        </div>

    </div>
   
  )
}

export default ProductDetails