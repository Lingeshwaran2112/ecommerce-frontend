
import React from "react";
import Nav from "./navbar";
import Shop from "./shop";
import axios from "axios";
import { Appcontext } from "./context";
import "../css/womens.css"
import { Link } from "react-router-dom";

function Allshop(props){

    const{womens , setWomens} = React.useContext(Appcontext)
    // const{ setProduct}=React.useContext(Appcontext)
    const {setItemDetails} = React.useContext(Appcontext)

    const { setWomenslink , setMenLink , setSunglassesLink ,setAllShopLink , setAllshop} =React.useContext(Appcontext)
    const {setMobilesLink , setCamerasLink} = React.useContext(Appcontext)
    const {api}= React.useContext(Appcontext)
    let path = props.location.pathname

    
// grtting all store data
  async function MenData(){
    try{
      const response = await axios.get( api + "/product")
      setWomens(response.data)
      setAllshop(true)
    //   setProduct(false)
    }catch(error){
        console.log(error)
    }  
 }

 React.useEffect(()=>{
     MenData()
     resettingLinks()
    // eslint-disable-next-line 
 },[])

//  resetting the link state to control the bg color of the li
 function resettingLinks (){
    setWomenslink(false)
    setMenLink(false)
    setSunglassesLink(false)
    setMobilesLink(false)
    setCamerasLink(false)
    setAllShopLink(true)
 }

    return(
        <>
        <Nav/>
        <div style={{width:"300px" , height:"auto" , marginLeft:"280px"}}>
          <div>
              <p className="t2">Home{path}</p>
              <p className="t3">Total Items : {womens.length} items</p>
          </div>
          </div>
          <hr style={{marginBottom:"0px"}}/>
        <div className="container-fluid">
            <div className="row">
                <div  className="col-lg-2 shopNav">
                    <Shop/>
                </div>
                <div className="col-lg-10 productRow">
                    <div className="row  r1">
                        {
                            womens.map((item)=>{
                                return(
                                    <>
                                    
                                    <div className="col-lg-3 col-md-4 col-sm-6 prd" key={item._id}>
                                       
                                        <Link to="/details" onClick={()=>{
                                            setItemDetails(item)
                                            window.localStorage.setItem("infos", JSON.stringify(item))}} style={{textDecoration:"none"}}>
                                            <div className="cards" >
                                                <div className="imgDiv"> 
                                                <img style={{borderRadius:'10px',objectFit:'fill'}} src={item.image} alt=""  className="prodimg"/>
                                                </div>
                                                <div className="prdName">
                                                <p className="itemNames">{item.productName}</p>
                                                </div>
                                                <hr style={{margin:"0px"}}/>
                                                <div className="prdName">
                                                <p className="type">{item.type}</p>
                                                </div>
                                                <div className="prdName">
                                                <p className="itemNames">₹ {item.price}</p>
                                                </div>
                                            </div>
                                        {/* </div> */} </Link>
                                    </div>
                                   
                                    </>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Allshop;
