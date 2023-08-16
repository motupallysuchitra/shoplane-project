import "./header.css"
import { useSelector } from "react-redux";
import {getSelected} from "../../reducer/CardReducer"
import { NavLink } from "react-router-dom";

function Header(){
  
   const count=useSelector(getSelected).length;
  return(
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary header">
    <div className="container-fluid">
      <NavLink className="navbar-brand logo" to="#"><span className="color">SHOP</span>LANE</NavLink>
      
      <div className="collapse navbar-collapse margin" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle arrange" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
   </svg>


          <li className="nav-item dropdown ">
            <button className="nav-link dropdown-toggle decor" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login or Sign Up
            </button>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/login">Login</NavLink></li>
              <li><NavLink className="dropdown-item" to="/signup">Signup</NavLink></li>
              <li><NavLink className="dropdown-item" to="/cart">Cart</NavLink></li>
              <li><NavLink className="dropdown-item" to="/favourite">Favorite</NavLink></li>
            </ul>
          </li>
          
        </ul>
        
 
  <NavLink to="/cart" className="btn btn-outline-dark ms-2 ">
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-cart carts" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg> Cart({count}) </NavLink>
 

      </div>
    </div>
    </nav>
    <div>
    <ul className="nav justify-content-center colors">
     
     <li className="nav-item">
       <NavLink className="nav-link b" aria-current="page" to="/Alllist">All</NavLink>
     </li>
     <li className="nav-item">
       <NavLink className="nav-link b" to="/electronic">Electronics</NavLink>
     </li>
     <li className="nav-item">
       <NavLink className="nav-link b" to="/jewelery">Jewelery</NavLink>
     </li>
     <li className="nav-item">
       <NavLink className="nav-link b" to="/menitem">Men's Clothing</NavLink>
     </li>
     <li className="nav-item">
       <NavLink className="nav-link b" to="/women">Women's Clothing</NavLink>
     </li>
    
   </ul>
   </div>
   </div>
  );
}
export default Header;