import React,{  useEffect, useState } from "react";
import Allitem from "./allitem";

function Womenitem(){
    const [getwmend,setwmend] = useState([]);
   useEffect (()=>
    {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res)=>res.json())
        .then((jsonr)=>
        {
            console.log("w",jsonr)
            setwmend(jsonr)
        })
    },[])
    return(
        <div className="row">
            {
              getwmend.map((p,i)=>
              (
                <div key={i} className="col-md-3">
                <Allitem item={p} key={i} />
                  </div>

              ))
            }
         </div>
    );
}

export default Womenitem;

