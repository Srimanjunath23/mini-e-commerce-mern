import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = ({cartItems,setCartItems}) => {
    const [product,setproduct]=useState(null);
    const {id}=useParams();
    const [qty,setqty]=useState(1)
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL +'/product/'+id)
        .then((res)=>res.json())
        .then((res)=>setproduct(res.product))
    
      },[]);
      function addtocart(){
        const itemExist=cartItems.find((item)=>item.product._id===product._id);
      
        if(!itemExist){
            const newItem={product,qty};
            setCartItems((state)=>[...state,newItem]);
            toast.success("Item added to cart successfully")

        }
        
      }
      function increment(){
        if(qty!==product.stock){
            setqty((state)=>state+1)
        }
      }
      function decrement(){
        if(qty>0){
            setqty((state)=>state-1)
        }
      }

  return (
   
    product && <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 mt-4 " id="product_image">
                <img src={product.images[0].image} className='rounded me-2' alt="sdf" height="500" width="500"/>
            </div>
 
            <div className="col-12 col-lg-5 mt-5 card shadow">
                <h3 className='mt-3'>{product.name}</h3>
                <p id="product_id"></p>

                {/* <hr/>

                <div className="rating-outer">
                    <div className="rating-inner" style={{width:`${(product.ratings/5)*100}%`}}></div>
                </div>
            */}

            
                <p id="product_price">{product.price}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={decrement}>-</span>

                    <input type="number" className="form-control count d-inline" value={qty} readOnly />

                    <span className="btn btn-primary plus" onClick={increment}>+</span>
                    <button type="button"  className="btn btn-dark w- d-inline ml-4 ms-5 rounded-pill" disabled={product.stock===0} onClick={addtocart}>Add to Cart</button>

                </div>
               
                 
                <hr/>

                <p>Status: <span id="stock_status" className={product.stock>0?'text-success':'text-danger'}>{product.stock > 0 ? 'In Stock':'Out of Stock'}</span></p>

                <hr/>

                <h4 className="mt-2">Description:</h4>
                <p>{product.description}</p>
                <hr/>
                <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
				
                {/* <div className="rating w-50"></div> */}
						
            </div>

        </div>

    </div>
   
  )
}

export default ProductDetails