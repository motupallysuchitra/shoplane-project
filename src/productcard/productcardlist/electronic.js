import React,{ useEffect, useState } from "react";
import Allitem from "./allitem";

function Electronic(){
    const [getele,setele] =useState([]);

    useEffect(()=>
    {
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res)=>res.json())
        .then((json)=>
        {
            console.log("e",json)
            setele(json)
        })
    },[])
    return(
        <div className="row">
            {
              getele.map((p,i)=>
              (
                <div key={i} className="col-md-3">
                <Allitem item={p} key={i} />
                  </div>

              ))
            }
         </div>
    );
}

export default Electronic;