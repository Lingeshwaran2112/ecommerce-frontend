import React from "react";
export const Appcontext = React.createContext()
export const ContextProvider = (props)=>{

   const[womens , setWomens] = React.useState([])
   const[product , setProduct]=React.useState(false)
   const[quantities , setQuantity] = React.useState(1)
   const [womensLink , setWomenslink] = React.useState(false)
   const[mensLink , setMenLink] = React.useState(false)
   const[sunglassesLink , setSunglassesLink] = React.useState(false)
   const[allShopLink , setAllShopLink] = React.useState(false)
   const[cameraLink , setCamerasLink] = React.useState(false)
   const[mobilesLink , setMobilesLink] = React.useState(false)
   const[api] = React.useState("https://waltecommerce.herokuapp.com")

   const[itemDetail , setItemDetails] = React.useState({})
   const[prdSize , setPrdSize] = React.useState("L")
   const[userEmail , setUserEmail] = React.useState("")
   const[password, setPassword] = React.useState("")
   const[name , setName]= React.useState("")
   const[msg , setmsg] = React.useState("")
   const[cartLength , setCartLength] = React.useState()
   const[allProductSort , setAllProductSort] = React.useState(false)
   const[orderLength , setOrderLength] = React.useState([])

   const [prices , setPrice] = React.useState([])
   const[payType , setPayType] = React.useState("")


   const[addressFormState, setAddressFormState]=React.useState(false)
   const[allShop , setAllshop] = React.useState(false)
   const[mensWearState , setMensWearState] = React.useState(false)

   const[navShopAll , setNavShopAll] = React.useState(false)

   const[trendingArticles , settrendingArticles] = React.useState([
         {
             key:0,
            productName : "IronMan Tony Tshirt",
            type:"T-shirt",
            size: ["M","L" , "XL" , "XXL"],
            details: "Stylish full sleeve Casual Printed Shirts & Party Wear Casual shirts Premium Poly Cottton, Pre Washed for an extremely soft finish and Rich look Modern slim fit ( we have updated our size chart, please refer the size chart for new measurements before ordering) Breathable Truly comfortable and easy to wear in every season it is insulating in winter and breathable in summer. Disclaimer Product colour may slightly vary due to photographic lighting sources or your monitor settings",
            image:"./images/mens/mth.jpg",
            price: 499,
            quantity:"In Stock",
            color: "Black And grey"
        },
        {
            productName : "Redmi Note 10 Pro Max",
            key:1,
            type:"Mobiles",
            size:["6 Gb","8 Gb"],
            color: ["Graphite Black, Steel Blue, Gloden Broze"],
            details: "Corning® Gorilla® Glass 6 | Dual texture body,Snapdragon™ 860 | 120Hz DotDisplay,48MP main camera, 8MP ultra-wide angle camera 2MPdepth sensor, 2MPmacro camera",
            image:"./images/mobiles/redmipro.jpg",
            price: 20999,
            quantity:"In Stock",
            warranty: "Black"
        },
       
        {
            productName : "Womens Fancy Tshirt",
            key:2,
            type:"T-shirt",
            size: ["M","L" , "XL" , "XXL"],
            details: "Stylish  Casual Printed Shirts & Party Wear Casual t-shirts Premium Poly Cottton, Pre Washed for an extremely soft finish and Rich look Modern slim fit ( we have updated our size chart, please refer the size chart for new measurements before ordering) Breathable Truly comfortable and easy to wear in every season it is insulating in winter and breathable in summer. Disclaimer Product colour may slightly vary due to photographic lighting sources or your monitor settings",
            image:"./images/womens/twh.jpg",
            price: 299,
            quantity:"In Stock",
            color: "Blue-yellow"
        },
        {
            productName : "Cannon 80d",
            key:3,
            type:"DSLR Camera",
            size:["18-55mm", "55-135"],
            details: "Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)",
            image:"./images/camera/cannon80d.jpg",
            price: 43999,
            quantity:"In Stock",
            color: "Black"
            },
   ])

   const[userOrder , setUserOrders] = React.useState([])
    return(
        <Appcontext.Provider value={{womens , setWomens ,womensLink , setWomenslink, mensLink , setMenLink,
            sunglassesLink , setSunglassesLink , cameraLink , setCamerasLink , mobilesLink , setMobilesLink ,
            product , setProduct ,api , itemDetail , setItemDetails , quantities , setQuantity,
            prdSize , setPrdSize ,userEmail , setUserEmail , password, setPassword ,name , setName,
            msg , setmsg , cartLength , setCartLength , prices , setPrice , payType , setPayType,
            addressFormState, setAddressFormState,allShop , setAllshop , allShopLink , setAllShopLink,
            navShopAll , setNavShopAll , mensWearState , setMensWearState , trendingArticles , settrendingArticles,
            userOrder , setUserOrders , orderLength , setOrderLength , allProductSort , setAllProductSort}}>
            {props.children}
        </Appcontext.Provider> 
    )
}