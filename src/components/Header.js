import { LOGO_URL } from "../utils/contents";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

   const [btnNameReact, setBtnNameReact] = useState("Login");
   const onlineStatus = useOnlineStatus();

   //Subscribing to the store using a selector
   const cartItems = useSelector((store)=>store.cart.items);
   alert("Please turn ON your Allow CORS extension");


    return(
        <div className = "flex justify-between bg-gradient-to-r from-fuchsia-800 from-80% shadow-lg mb-4 rounded-lg h-auto"> 
        <div className = "logo-container">
            <img className = "w-56 rounded-xl shadow-xl mt-2 ml-1 hover:cursor-pointer " src= {LOGO_URL}/>
        </div>
        <div className = "flex items-center">
            <ul className = "flex p-16 m-6 px-2 items-center">
               <li className="px-6 font-bold text-fuchsia-950 rounded-md bg-rose-200 py-3 shadow-md hover:bg-rose-400 cursor-pointer">Online Status {onlineStatus? "🟢":"🔴"}</li> 
               <li className="px-4 font-bold text-rose-100"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Home</Link></li> 
               {/* <li className="px-4 font-bold text-rose-100"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">Explore</Link></li>  */}
               <li className="px-4 font-bold text-rose-100"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/about">About Us</Link></li> 
               <li className="px-4 font-bold text-rose-100"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contact">Contact Us</Link></li> 
               <li className="px-4 font-bold text-fuchsia-950 m-2 rounded-md bg-rose-200 py-3 shadow-md hover:bg-rose-400"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/cart">🛒-({cartItems.length} items)</Link></li> 
               <button className = "px-6 font-bold text-green-950 rounded-md bg-rose-200 py-3 shadow-md hover:bg-rose-400"
               onClick={()=>{
                btnNameReact == "Login" 
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
               }}
               >{btnNameReact}</button>
                </ul>  
        </div>
    </div>);
};  
export default Header;