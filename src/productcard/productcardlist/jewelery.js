import React,{ useEffect, useState } from "react";
import Allitem from "./allitem";


function Jewelery(){
    const [getjewl,setjewl] =useState([]);

    useEffect(()=>
    {
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res)=>res.json())
        .then((jres)=>
        {
            console.log("j",jres)
            setjewl(jres)
        })
    },[])
    return(
        <div className="row">
            {
              getjewl.map((p,i)=>
              (
                <div key={i} className="col-md-3">
                <Allitem item={p} key={i} />
                  </div>

              ))
            }
         </div>
    );
}

export default Jewelery;