import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
 let navigate=useNavigate();
  function Handelclick(){
   navigate("/Alllist",true)
  }
  return (
    <div className="login-container">
  <center><h2 className ="head">Login</h2></center>    
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example"></input>
      </div>
      <p>Don't have an account? Sign up<a href="/signup">here.</a></p>
      
      <input className="btn btn-primary" value="Login" type="submit" onClick={Handelclick}/>
    </div>
  );
}

export default Login;
