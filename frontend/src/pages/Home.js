import React, { useEffect, useState } from 'react'

import ProductCard from '../components/ProductCard'


const Home = () => {
  const [products,setproduct]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/api/v1/product')
    .then((res)=>res.json())
    .then((res)=>setproduct(res.products))

  },[])
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