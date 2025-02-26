import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [keyword,setkeyword]=useState("");
    const navigate=useNavigate();

    const searchHandle=()=>{
        navigate('/search?keyword='+keyword);

    }
  return (
    <>
        <input
            type="text"
            id="search_field"
            className="form-control  ms-5 me-3 w-50 rounded"
            onChange={(e)=>setkeyword(e.target.value)}
            onBlur={searchHandle} 
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" onClick={searchHandle} className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
    </>
  )
}

export default Search