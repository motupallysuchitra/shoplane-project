import Header from "./shared/header/header"
import Allitemlist from "./productcard/productcardlist/allitemlist"
import Electronic from "./productcard/productcardlist/electronic"
import Jewelery from "./productcard/productcardlist/jewelery"
import Menitem from "./productcard/productcardlist/menitem"
import Womenitem from "./productcard/productcardlist/womenitem"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login  from "./shared/header/login"
import Signup  from "./shared/header/signup";
import  Message from "./shared/header/message";
import Cart from "./components/cart";
import Favourite from "./components/favitem"
import './App.css';
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
     <Header />
   <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/Alllist" element={<Allitemlist />}></Route>
      <Route path="/message" element={<Message />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/favourite" element={<Favourite/>}></Route>
      <Route path="/" element={<Allitemlist />}></Route>
      <Route path="/electronic" element={<Electronic />}></Route>
      <Route path="/jewelery" element={<Jewelery />}></Route>
      <Route path="/menitem" element={<Menitem />}></Route>
      <Route path="/women" element={<Womenitem />}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
