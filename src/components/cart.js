import { useDispatch, useSelector } from "react-redux";
import {getSelected,Amount} from "../reducer/CardReducer"
import { getTotals } from "../reducer/CardReducer";
import "./cart.css"
import Cartitem from "./cartitems";
import { useEffect } from "react";


function Cart() {
   let Cardproduct=useSelector(getSelected);
   const dispatch = useDispatch();
   const total=useSelector(Amount)
   useEffect(() => {
    dispatch(getTotals());
  }, [total,dispatch]);


   const shippingEstimate = 5;
  const taxEstimate = 5;
  return (
    <div className="cart-items">
        {Cardproduct.length===0 ?
        
        <div className="empty"><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
      </svg> 
          your card is empty
  </div>
          
        :
        <span className="pro-card">
          <div>
         {
              Cardproduct.map((item) => {
                return (
                  
                  <Cartitem Cardproduct={item} key={item.id} />
                  
                )
              })
            }
            </div>
            <div className="order-sum">
                    <h4>Order Summary</h4>
                    <span>
                      <h6>Subtotal</h6>
                      <p>${total}</p>
                    </span>
                   <span>
                      <h6>Shipping Estimate</h6>
                      <p>${shippingEstimate}</p>
                    </span>
                    <span>
                      <h6>Tax Estimate</h6>
                      <p>${taxEstimate}</p>
                    </span>
                    <span>
                      <h6>Order Total</h6>
                      <p>${total+shippingEstimate+taxEstimate}</p>
                    </span>
                    
                  </div>
                  
          </span>
          
          }
      </div>
  );
}

export default Cart;
