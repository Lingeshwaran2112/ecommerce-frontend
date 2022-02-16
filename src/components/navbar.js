import React from "react";
import {useHistory , Link , NavLink} from "react-router-dom";
import jwt from "jsonwebtoken";
import { Appcontext } from "./context";
import axios from "axios";
import "../css/detail.css"

function Nav(){
    let token = window.localStorage.getItem("auth")
    let userData = jwt.decode(token)
   
    let history = useHistory()
    const {cartLength ,setCartLength,  setPrice ,setAllProductSort} = React.useContext(Appcontext)
    const{navShopAll , setNavShopAll , mensWearState , setMensWearState} = React.useContext(Appcontext)
    const {api}= React.useContext(Appcontext)
   

    const instance = axios.create({
        baseURL: api , 
        headers:{
            "auth-token" : token
        },
    })
    
    async function dtl (){
        try{
            const response = await instance.get( api + "/getCart")
             setCartLength(response.data)
             setPrice(response.data.cart)
  
        }catch(error){
            console.log(error)
        }
    }
    
    React.useEffect(()=>{
        dtl()
        // eslint-disable-next-line 
    },[])

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light  navbars">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
            <div style={{width:"120px" , height:"40px" , padding:"5px"}}>
                <img  src="./images/brandLogo.png" alt="brandLogo" style={{width:"100%" , height:"100%"}}/>
            </div>
            {/* <a className="navbar-brand" href="/">Hidden brand</a> */}
            <div>
            <NavLink className="shopDiv" exact activeStyle={{color:"#e36a00"}} to="/"
             style={{textDecoration:"none"}}
             onClick={()=>{
                setNavShopAll(false)
                setMensWearState(false)}}>
                <p style={{margin:"0px 20px 0px 50px"}}>Home</p>
            </NavLink>
            </div>
            <div>
                <NavLink exact to="/allProduct" className="shopDiv" activeStyle={{color:"#00D7E3"}} 
               style={navShopAll===true ? {textDecoration:"none" , color:"#00D7E3"} : {textDecoration:"none"}}
               onClick={()=>{
                   setNavShopAll(true)
                   setAllProductSort(true)
                   setMensWearState(false)}}>
                <p style={{margin:"0px 20px"}}>Shop All</p>
                </NavLink>
            </div>
            <div className="categorie">
                <div className="categoriesDiv">
                    <button className="categoriesButton" onClick={()=>{
                        setMensWearState(!mensWearState)
                        setNavShopAll(false)
                        }}>
                        <p 
                        style={mensWearState === true ? {margin:"0px 8px 0px 20px" , color:"#00e300"}:
                        {margin:"0px 8px 0px 20px"}}>Categories</p>
                        <i className="fas fa-angle-down caticon" style={mensWearState ? {color:"#00e300"}:{color:"black"}}></i>
                    </button>
                </div>
                {
                    mensWearState===true ? 
               
                <div className="mensWearDiv">
                    <div style={{width:"120px" , marginTop:"5px" , textAlign:"center"}}>
                    <p style={{marginBottom:"0px"}}>ACCESSORIES</p>
                    <hr style={{margin:"5px 0px 5px 0px"}}/>
                    </div>
                    <div>
                        <ul type="none" className="listsWear">
                            <Link to="/womens" style={{textDecoration:"none" }}>
                            <li className="d1">Womens</li>
                            </Link>
                            <Link to="/mens" style={{textDecoration:"none"}}>
                            <li className="d1">Mens</li>
                            </Link>
                            <Link to="/sunglasses" style={{textDecoration:"none"}}>
                            <li className="d1">Sunglasses</li>
                            </Link>
                            <Link to="/camera" style={{textDecoration:"none"}}>
                            <li className="d1">Camera</li>
                            </Link>
                            <Link to="/mobiles" style={{textDecoration:"none"}}>
                            <li className="d1">Mobiles</li>
                            </Link>
                        </ul>
                    </div>
                </div>:
                null
                }
            </div>
            <ul className="navbar-nav ulItems">
            <li className="nav-item active ulLis">
                {
                    token  && userData.exp*1000 >= Date.now() ? 
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle logBtnToggler" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           {userData.name}
                        </button>
                        <div className="dropdown-menu dropMenu1" aria-labelledby="dropdownMenuButton">
                        <Link to="/" style={{textDecoration:'none'}}>
                         <button className="dropdown-item dropMenubtn" type="button" style={{cursor:"pointer"}}
                         onClick={()=>{
                             localStorage.clear()
                             setCartLength("")
                         }}>Logout</button></Link>
                         <Link to="/orderHistory" style={{textDecoration:'none'}}>
                         <button className="dropdown-item dropMenubtn" type="button" style={{cursor:"pointer"}}> Placed Orders</button>
                         </Link>
                         <Link to="/forgetPassword" style={{textDecoration:'none'}}>
                         <button className="dropdown-item dropMenubtn" type="button" style={{cursor:"pointer"}}>Reset Password</button>
                         </Link>
                            {/* <a className="dropdown-item" href="#">Placed Orders</a> */}
                            
                        </div>
                    </div> :
                     <button onClick={()=>{
                         history.push("/login")
                         setMensWearState(false)
                         setNavShopAll(false)
                        }} className="logBtnToggler" style={{cursor:"pointer"}}>Login</button>
                }
               
            </li>
            <li className="nav-item ulLi">
                <Link to="/cart" onClick={()=>{
                    setMensWearState(false)
                    setNavShopAll(false)
                    }}>
                <button className="uliBtn"><i className="fas fa-shopping-cart cartIcons"></i>
                 {cartLength ? cartLength.cart.length : null}</button>
                </Link>
            </li>
            <li className="nav-item ulLi">
            <Link to="/wishList" onClick={()=>{
                setMensWearState(false)
                setNavShopAll(false)
                }}>
            <button className="uliBtn"><i className="far fa-heart heartsIcons"></i>
            { cartLength ? cartLength.wishList.length : null}</button>
            </Link>
            </li>
            </ul>
        </div>
        </nav>
        </>
    )
}

export default Nav;