import React from "react";
import{BrowserRouter , Switch, Route} from "react-router-dom";
import { ContextProvider } from "./components/context";
import Womens from "./components/womens";
import Mens from "./components/mens";
import Sunglasses from "./components/sunglasses";
import Camera from "./components/camera";
import Mobiles from "./components/mobiles";
import Details from "./components/itemDetails";
import Login from "./components/auth/loginPage";
import RegisterForm from "./components/auth/registerForm";
import VerifyEmail from "./components/auth/verifymail";
import ForgetPass from "./components/auth/forgetPassword";
import UpdatePassword from "./components/auth/updatePass";
import CartItems from "./components/cartItems";
import WishListItems from "./components/wishListItem";
import Allshop from "./components/allShop";
import Home from "./components/LandingPage";
import UserOrders from "./components/placedOrder";
import './css/landing.css'

function App() {
  return (
   <>
   <ContextProvider>
     <BrowserRouter>
     <Switch>
       <Route  exact path="/" component={Home}/>
       <Route  path="/womens" component={Womens}/>
       <Route path="/mens" component={Mens}/>
       <Route path="/sunglasses" component={Sunglasses}/>
       <Route path="/camera" component ={Camera}/>
       <Route path="/mobiles" component={Mobiles}/>
       <Route path="/details" component={Details}/>
       <Route path="/login" component={Login}/>
       <Route path="/register" component={RegisterForm}/>
       <Route path="/verify/:id" component={VerifyEmail}/>
       <Route path="/forgetPassword" component={ForgetPass}/>
       <Route path="/resetMail/:id" component={UpdatePassword}/>
       <Route path="/cart" component={CartItems} />
       <Route path="/wishList" component={WishListItems}/>
       <Route path="/allProduct" component={Allshop}/>
       <Route path="/orderHistory" component={UserOrders}/>
     </Switch> 
    </BrowserRouter>
   </ContextProvider>
   
   </>
  );
}

export default App;
