import React,{ useEffect, useState } from "react";
import Allitem from "./allitem";

function Menitem(){
    const [getmend,setmend] =useState([]);

    useEffect(()=>
    {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res)=>res.json())
        .then((jres)=>
        {
            console.log("m",jres)
            setmend(jres)
        })
    },[])
    return(
        <div className="row">
            {
              getmend.map((p,i)=>
              (
                <div key={i} className="col-md-3">
                <Allitem item={p} key={i} />
                  </div>

              ))
            }
         </div>
    );
}

export default Menitem;