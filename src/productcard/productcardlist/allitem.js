import "./allitem.css";
import React from "react";
import { Rate } from "antd";
import { useDispatch } from "react-redux";
import { addToCart,removeFromCart,addToFav,removeFromFav } from "../../reducer/CardReducer";
import { useSelector } from "react-redux";
import { getSelected } from "../../reducer/CardReducer";
import {heart} from "../../reducer/CardReducer"
import  {FaHeart} from "react-icons/fa"

function Allitem(props)
{
    let product=props.item;
    let Dispatch=useDispatch();
    let id=useSelector(getSelected);
    let toggel=id.findIndex(item => item.id === product.id) >= 0;
    let favid=useSelector(heart);
    let favtoggel=favid.findIndex(item => item.id === product.id) >= 0;
    console.log("favtoggel",favtoggel)
    const handleAddtocard=()=>
    {
      
      
      Dispatch(addToCart(product))
    }
    const handleRemoveFromcard=()=>
    {
      
      Dispatch(removeFromCart(product))
    }
    const handleAddToFav=()=>
    {
      
      Dispatch(addToFav(product))
      console.log("hwdchv")
    }
    const handleRemoveFromFav=()=>
    {
      
      Dispatch(removeFromFav(product))
    }
    
    
   
    return(

    <div className="card product">
       <div className="favorite-icon fix">
                        <FaHeart
                            color={favtoggel ? "red" : "gray"}
                            onClickCapture={favtoggel ? ((e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                handleRemoveFromFav(product)
                            }) :
                                ((e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    handleAddToFav(product)
                                })}
                            size={20}
                        />
                        </div>
  <img className="card-img-top img" src={product.image} alt="Card image cap"/>
  <hr />
  <div className="card-body">
    
    <h6 className="card-title"><b>Brand,</b>{product.title.slice(0,20)}...</h6>
     <div  className="rating">
        <div className="rate">
    <Rate defaultValue={product.rating.rate}  allowClear={false} allowHalf={true}/>
</div>
<p className="count">({product.rating.count})</p>
</div>
<div className="price">${product.price}</div>
    <button href="#" className={"btn btn-primary " +(toggel ?"card-change":"")} onClick={
      toggel ? (e) =>
      {
        e.preventDefault();
        e.stopPropagation();
        handleRemoveFromcard();
     }:(e)=>
     {
       e.preventDefault();
        e.stopPropagation();
        handleAddtocard();
     }
    }>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart gbtn" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>{toggel?"Remove from cart":"Add to cart"}</button>
  </div>
</div>
    );
}


export default Allitem;