import React from "react";
import { Appcontext } from "./context";
import "../css/shop.css";
import { Link} from "react-router-dom";
import axios from "axios";


function Shop(props){
    
    const{product , setProduct ,allShop , setAllshop , api}=React.useContext(Appcontext)
    const{ setWomens} = React.useContext(Appcontext)
    const {Womenslink , MensLink , allProductSort , setAllProductSort} = React.useContext(Appcontext)
    const {SunglassesLink ,CameraLink ,MobilesLink , allShopLink} = React.useContext(Appcontext)
    const[sort , setSort] = React.useState(false)
    
    async function lowToHigh(){
        if(allProductSort !== true){
            try{
                const response = await axios.put(api + "/asc",{
                    typess : props.type
                })
                setWomens(response.data)
            }catch(error){
                console.log(error)
            }
        }
        else{
            try{
                const response = await axios.get(api + "/all_asc")
                setWomens(response.data)
            }catch(error){
                console.log(error)
            }  
        }
    }

    async function highToLow(){
        if(allProductSort !== true){
            try{
                const response = await axios.put(api + "/dsc",{
                    typess : props.type
                })
                setWomens(response.data)
            }catch(error){
                console.log(error)
            }
        }else{
            try{
                const response = await axios.get(api + "/all_dsc")
                setWomens(response.data)
            }catch(error){
                console.log(error)
            }
        }
       
    }

    return(
        <>
       
                     <div>
                        <div className="items">
                        <p className="itmTitle">SHOP ALL</p>
                        <button className="arrowBtn" onClick={()=>{setAllshop(!allShop)}}>
                            <i className="fas fa-chevron-down"></i></button>
                        </div>
                        <hr style={{marginBottom:"5px"}}/>
                        {
                            allShop===true ? 
                            <div className="itemList">
                                <ul  type="none" className="types">
                                     <Link to="/allProduct"  style={{textDecoration:"none" , color:"black"}} onClick={()=>{setAllProductSort(true)}}>
                                     <div  className="cate1"  style={allShopLink===true ? {backgroundColor:"rgb(14, 212, 212)" , color:"white", display:"flex"}: {display:"flex"}}>
                                        <div style={{width:"28px" , height:"25px", margin:"8px 8px 0px 8px"}}>
                                            <img src="./images/product.png" style={{width:"100%" , height:"100%"}} alt="dicon"/>
                                        </div>
                                        <div style={{width:"100%"}}>
                                        <li className="lis">All Products</li>
                                        </div>
                                    </div>
                                    </Link>
                                </ul>
                            </div>:null
                        }
                    </div>
                    <div>
                        <div className="items">
                        <p className="itmTitle">CATEGORIES</p>
                        <button className="arrowBtn" onClick={()=>{setProduct(!product)}}>
                            <i className="fas fa-chevron-down downs"></i></button>
                        </div>
                        <hr style={{marginBottom:"5px"}}/>
                        {
                            product===true ? 
                            <div className="itemList">
                            <ul type="none" className="types">
                                
                               

                                <Link to="/womens"  style={{textDecoration:"none" , color:"black"}} onClick={()=>{setAllProductSort(false)}}>
                                    <div className="cate1"  style={Womenslink===true ? {backgroundColor:"rgb(14, 212, 212)" , color:"#090083", display:"flex"}: {display:"flex"}}>
                                    
                                        <div style={{width:"28px" , height:"25px", margin:"8px 8px 0px 8px"}}>
                                            <img src="./images/womens.png" style={{width:"100%" , height:"100%"}} alt="dicon"/>
                                        </div>
                                        <div style={{width:"100%"}}>
                                        <li className="lis">Womens</li>
                                        </div>
                                    </div>
                              
                                </Link>

                                <Link to="/mens"  style={{textDecoration:"none"  , color:"black"}} onClick={()=>{setAllProductSort(false)}}>
                                     <div  className="cate1"  style={MensLink===true ? {backgroundColor:"rgb(14, 212, 212)" , color:"090083", display:"flex"}: {display:"flex"}}>
                                        <div style={{width:"28px" , height:"25px", margin:"8px 8px 0px 8px"}}>
                                            <img src="./images/mens.png" style={{width:"100%" , height:"100%"}} alt="dicon"/>
                                        </div>
                                        <div style={{width:"100%"}}>
                                        <li className="lis">Mens</li>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/sunglasses"  style={{textDecoration:"none"  , color:"black"}} onClick={()=>{setAllProductSort(false)}}>
                                    <div   className="cate1" style={SunglassesLink===true ? {backgroundColor:"rgb(212, 14, 14)" , color:"090083", display:"flex"}: {display:"flex"}}>
                                        <div style={{width:"28px" , height:"25px", margin:"8px 8px 0px 8px"}}>
                                            <img src="./images/sunglasses.png" style={{width:"100%" , height:"100%"}} alt="dicon"/>
                                        </div>
                                        <div style={{width:"100%"}}>
                                        <li className="lis">Sunglasses</li>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/camera"  style={{textDecoration:"none"  , color:"black"}} onClick={()=>{setAllProductSort(false)}}>
                                    <div  className="cate1"  style={CameraLink===true ? {backgroundColor:"rgb(212, 14, 14)" , color:"090083", display:"flex"}: {display:"flex"}}>
                                        <div style={{width:"28px" , height:"25px" , margin:"8px 8px 0px 8px"}}>
                                            <img src="./images/camera3.png" style={{width:"100%" , height:"100%"}} alt="dicon"/>
                                        </div>
                                        <div style={{width:"100%"}}>
                                        <li className="lis">Camera</li>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/mobiles"  style={{textDecoration:"none"  , color:"black"}} onClick={()=>{setAllProductSort(false)}}>
                                    <div  className="cate1"  style={MobilesLink===true ? {backgroundColor:"212, 14, 14)" , color:"090083", display:"flex"}: {display:"flex"}}>
                                        <div style={{width:"28px" , height:"25px", margin:"8px 8px 0px 8px"}}>
                                            <img src="./images/mobile.png" style={{width:"100%" , height:"100%"}} alt="dicon"/>
                                        </div>
                                        <div style={{width:"100%"}}>
                                        <li className="lis">Mobiles</li>
                                        </div>
                                    </div>
                                </Link>

                            </ul>
                            <hr/>
                        </div>: null

                        }
                        
                        
                    </div>
                   
                    <div>
                        <div className="items">
                        <p className="itmTitle">SORT</p>
                        <button className="arrowBtn" onClick={()=>{setSort(!sort)}}><i className="fas fa-chevron-down"></i></button>
                        </div>
                        <hr style={{marginBottom:"5px"}}/>
                        {
                            sort===true ?
                            <div className="itemList">
                            <ul type="none" className="types">
                               
                                <div  className="cate1" style={{display:"flex"}}>
                                    <div style={{width:"22px" , height:"20px", margin:"8px 8px 0px 8px"}}>
                                        <img src="./images/upIcon.png" style={{width:"100%" , height:"100%"}} alt="dicon"/>
                                    </div>
                                    <div style={{width:"100%"}}>
                                    <li className="lis">
                                    <button className="sortingBtn" onClick={lowToHigh} style={{display:"flex" , textAlign:"center"}}>
                                    Low to High</button>
                                    </li>
                                    </div>
                                </div>

                                <div className="cate1" style={{display:"flex"}}>
                                    <div style={{width:"22px" , height:"20px", margin:"8px 8px 0px 8px"}}>
                                        <img src="./images/downIcon.png" style={{width:"100%" , height:"100%"}} alt="dicon"/>
                                    </div>
                                    <div style={{width:"100%"}}>
                                    <li className="lis">
                                    <button className="sortingBtn" onClick={highToLow} style={{display:"flex" , textAlign:"center"}}>
                                    High to Low</button>
                                    </li>
                                    </div>
                                </div>
                            </ul>
                            <hr/>
                            </div>:null

                        }
                    </div>
        </>
    )
}

export default Shop;
