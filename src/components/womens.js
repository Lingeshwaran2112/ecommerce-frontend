import React from "react";
import Nav from "./navbar";
import Shop from "./shop";
import axios from "axios";
import { Appcontext } from "./context";
import "../css/womens.css"
import { Link } from "react-router-dom";

function Womens(props){

    const{womens , setWomens ,setProduct ,setAllProductSort} = React.useContext(Appcontext)
    const { setWomenslink , setMenLink , setSunglassesLink } =React.useContext(Appcontext)
    const {setMobilesLink , setCamerasLink ,setItemDetails,setAllShopLink , setMensWearState} = React.useContext(Appcontext)
   
    const {api}= React.useContext(Appcontext) 
    let path = props.location.pathname

  async function womensData(){
    try{
      const response = await axios.get( api + "/womens")
      setWomens(response.data)
      setProduct(true)
      setAllProductSort(false)
      setMensWearState(false)
    
    }catch(error){
        console.log(error)
    }  
 }
// eslint-disable-next-line 
 React.useEffect(()=>{
     // eslint-disable-next-line 
     womensData()
     // eslint-disable-next-line 
     resettingLinks()
    // eslint-disable-next-line 
 },[])

 function resettingLinks (){
    setWomenslink(true)
    setMenLink(false)
    setSunglassesLink(false)
    setCamerasLink(false)
    setMobilesLink(false)
    setAllShopLink(false)
 }

    return(
        <>
        <Nav/>
        <div style={{width:"300px" , height:"auto" , marginLeft:"280px"}}>
          <div>
              <p className="t2">Home{path}</p>
              <p className="t3">Womens : {womens.length} items</p>
          </div>
          </div>
          <hr style={{marginBottom:"0px"}}/>
        <div className="container-fluid">
            <div className="row">
                <div  className="col-lg-2 shopNav">
                    <Shop type="womens"/>
                </div>
                <div className="col-lg-10 productRow">
                    <div className="row  r1">
                        {
                            womens.map((item)=>{
                                return(
                                    <>
                                    
                                    <div className="col-lg-3 col-md-4 col-sm-6 prd">
                                        {/* <div className="cardInfo"> */}
                                        <Link to="/details" onClick={()=>{
                                            setItemDetails(item)
                                            window.localStorage.setItem("infos", JSON.stringify(item))}} style={{textDecoration:"none"}}>
                                            <div className="cards" >
                                                <div className="imgDiv"> 
                                                <img src={item.image} alt=""  className="prodimg"/>
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

export default Womens;
