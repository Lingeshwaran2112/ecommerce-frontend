import React from "react";
import Nav from "./navbar";
import Shop from "./shop";
import axios from "axios";
import { Appcontext } from "./context";
import "../css/womens.css"
import { Link } from "react-router-dom";

function Sunglasses(props){

    const{womens , setWomens} = React.useContext(Appcontext)
    const{setProduct , setItemDetails}=React.useContext(Appcontext)
    const { setWomenslink , setMenLink , setSunglassesLink , setAllShopLink} =React.useContext(Appcontext)
    const {setMobilesLink , setCamerasLink  , setMensWearState} = React.useContext(Appcontext)
    const {api , setAllProductSort}= React.useContext(Appcontext)
    let path = props.location.pathname

   
// getting all sunglasses data
  async  function SunglassesData(){
    try{
      const response = await axios.get( api + "/sunglasses")
      setWomens(response.data)
      setProduct(true)
      setAllProductSort(false)
      setMensWearState(false)
    }catch(error){
        console.log(error)
    }  
 }

 React.useEffect(()=>{
     SunglassesData()
     resettingLinks()
       // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])

//  resetting the links 
 function resettingLinks (){
    setWomenslink(false)
    setMenLink(false)
    setSunglassesLink(true)
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
              <p className="t3">Sunglasses : {womens.length} items</p>
          </div>
          </div>
          <hr style={{marginBottom:"0px"}}/>
        <div className="container-fluid">
            <div className="row">
                <div  className="col-lg-2 shopNav">
                    <Shop type="sunglasses"/>
                </div>
                <div className="col-lg-10 productRow">
                    <div className="row  r1">
                        {
                            womens.map((item)=>{
                                return(
                                    <>
                                    
                                    <div className="col-lg-3 col-md-4 col-sm-6 prd" key={item._id}>
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

export default Sunglasses;
