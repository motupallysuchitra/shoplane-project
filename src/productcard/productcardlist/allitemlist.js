import { useEffect, useState } from "react";
import Allitem from "./allitem";
function Alllist(){
    const [getalldata, setalldata] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((jsonResponse) => {
          console.log("all",jsonResponse );
          setalldata(jsonResponse);
          })
        
      }, []);
    return(
       

        <div className="row">
            {
              getalldata.map((p,i)=>
              (
                <div key={i} className="col-md-3">
                <Allitem item={p} key={i} />
                  </div>

              ))
            }
         </div>
    );
}

export default Alllist;

