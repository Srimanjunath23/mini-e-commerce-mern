import React, { useEffect, useState } from 'react'

import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';


const Home = () => {
  const [products,setproduct]=useState([]);
  const [searchParams,setsearchparams]=useSearchParams()
  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL +'/product?'+searchParams)
    .then((res)=>res.json())
    .then((res)=>setproduct(res.products))

  },[searchParams])
  return (
    <div className='row'>
        <h1 id="products_heading">Latest Products</h1>
      {
        products.map(product=> <ProductCard product={product}/>)
      }
      {/* <ProductCard/>  */}
      
       
       
    </div>
  )
}

export default Home