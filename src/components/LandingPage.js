import React from "react";
import Nav from "./navbar";
import "../css/landing.css";
import "../css/womens.css";
import { Link } from "react-router-dom";
import { Appcontext } from "./context";

function Home(){
    const{trendingArticles  , setItemDetails}= React.useContext(Appcontext)
    return(
        <>
        <Nav/>

        {/* carousel section */}

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" >
                <img className="d-block w-100" src="./images/q.jpg" alt="First slide"  style={{width:"100%" , height:"100%"}}/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="./images/q2.jpg" alt="Second slide"/>
                </div>
               
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        {/* Shopping categories */}

        <div className="homeCatDiv">
            <p className="j1">CATEGORIES</p>
        </div>
        <div className="container-fluid">
            <div className="row" >
                <div className="col-lg-4 rows12">
                    <Link to="/womens">
                    <div className="homeImg">
                    <img src="./images/womenshome.jpg" alt="womens" className="twerk" />
                    <div className="titleHome">
                        <p style={{fontSize:"2rem" , fontWeight:"bold"}}>Womens</p>
                    </div>
                    </div>
                    </Link>
                    
                </div>
                <div className="col-lg-4 rows12"  >
                    <Link to="/mens">
                    <div  className="homeImg">
                    <img src="./images/menshome.jpg" alt="mens" className="twerk"/>
                    <div className="titleHome">
                        <p style={{fontSize:"2rem" , fontWeight:"bold"}}>Mens</p>
                    </div>
                    </div>
                    </Link>
                   
                </div>
                <div className="col-lg-4 rows12" >
                    <Link to="/sunglasses">
                    <div  className="homeImg">
                    <img src="./images/homesunglass.jpg" alt="sunglasses" className="twerk"/>
                    <div className="titleHome">
                        <p style={{fontSize:"2rem" , fontWeight:"bold"}}>Sunglasses</p>
                    </div>
                    </div>
                    </Link>
                   
                </div>   
            </div>
        </div>
        <div className="container-fluid">
            <div className="row" >
                <div className="col-lg-6 rows13" >
                    <Link to="/camera">
                    <div className="homeImg2">
                    <img src="./images/homecamera.jpg" alt="camera" className="twerk"/>
                    <div className="titleHome2">
                        <p style={{fontSize:"2rem" , fontWeight:"bold"}}>Camera</p>
                    </div>
                    </div>
                    </Link>
                </div>   
                <div className="col-lg-6 rows13"  >
                    <Link to="/mobiles">
                    <div className="homeImg2">
                    <img src="./images/homemobiles.jpg" alt="womens" className="twerk"/>
                    <div className="titleHome2">
                        <p style={{fontSize:"2rem" , fontWeight:"bold"}}>Mobiles</p>
                    </div>
                    </div>
                    </Link>
                </div>   
            </div>
           
        </div>

        {/* trending articles */}

        <div className="homeCatDiv">
            <p className="j1">TOP SELLINGS</p>
        </div>
        <div className="container-fluid">
            <div className="row rj">
            {
                trendingArticles.map((item)=>{
                    return(
                            <>      
                            <div  key={item.key} className="col-lg-3 col-md-4 col-sm-6 prd">
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
                                </Link>
                            </div>
                                   
                            </>
                            )

                            })

            }
            </div>
        </div>
        <div className="homeCatDiv2">
            <p className="title12">WELCOME ALL OF YOU.</p>
            <p className="title12">Top Brands <span style={{color:"#3e1394"}}>Available Here. </span> </p>
            <p className="title123">Over <span style={{color:"#139458"}}> 5 Million </span> Happy Customer</p>
            
        </div>

        {/* Footer */}

        <div className="container-fluid kk" >
            <div className="row" style={{padding:"0px 20px"}}>
                <div className="col-lg-4" style={{padding:"0px 35px" , borderRight:"1px solid rgb(190, 190, 190)"}}>
                    <div className="footer">
                    <p><span style={{color:"#1b1e80"}}>ABOUT US</span></p>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <p className="z1">
                         We create and curate stunning designs and print 
                         them on all sorts of equally stunning products- from t-shirts 
                         to shirts to  jeans mobiles and cameras
                         and many, many more! Our funky all products are 
                         designed and printed specifically to the direct shops and individual showrooms.
                         So if you're looking for great products, 
                         with even greater deals and discounts, you've come to the right place!

                        </p>
                    </div>
                </div>
                <div className="col-lg-4" style={{padding:"0px 35px" , borderRight:"1px solid rgb(190, 190, 190)"}}>
                    <div  className="footer">
                    <p><span style={{color:"#FD002A"}}>CONTACT US</span></p>
                    </div>
                    <div>
                        <p className="z1">You can mail us or give a ring we will be happy by helping you,
                            drop a direct mail to our mail box , return an order on provided address
                        </p>
                    </div>
                    <div style={{display:"flex"}}>
                    <i className="fas fa-envelope contactIcon"></i>
                    <p className="z1"><span style={{color:"#090083"}}>ecommercshop.com</span></p>
                    </div>
                    <div style={{display:"flex"}}>
                    <i className="fas fa-phone-square contactIcon"></i>
                    <p className="z1"><span style={{color:"#090083"}}>(+91)-1234567890</span></p>
                    </div>
                    <div style={{display:"flex"}}>
                    <i className="fas fa-map-marker-alt contactIcon"></i>
                    <p className="z1">Street:Gandhinagar, Door No:123/4, Town:Nethaji,Bangalore</p>
                    </div>
                </div>
                <div className="col-lg-4" style={{padding:"0px 35px" }}>
                    <div style={{display:"flex"}}>
                    <i className="fas fa-recycle contactIcon"></i>
                    <p className="z1">30 Days return policy available</p>
                    </div>
                    <div style={{display:"flex"}}>
                    <i className="fas fa-rupee-sign contactIcon"></i>
                    <p className="z1">COD Available</p>
                    </div>
                    <div style={{display:"flex"}}>
                    <i className="fas fa-truck contactIcon"></i>
                    <p className="z1">Get your product deliver in<span style={{color:"#CB0000"}}> 4 or 7 days</span></p>
                    </div>
                    <div style={{marginTop:"10px"}}>
                        <div>
                            <p><span style={{color:"#000000"}}>STAY HOME, STAY SAFE</span></p>
                        </div>
                        <i className="fab fa-facebook-square fa-2x socialIcons fa-color-blue"></i>
                        <i className="fab fa-github fa-2x socialIcons" style={{color:"#00000"}}></i>
                        <i className="fab fa-instagram fa-2x socialIcons" style={{color:"rgb(243, 43, 43)"}}></i>
                        <i className="fab fa-twitter fa-2x socialIcons" style={{color:"#4fd3f7"}}></i>
                        <i className="fab fa-whatsapp fa-2x socialIcons" style={{color:"#009A1F"}}></i>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home;