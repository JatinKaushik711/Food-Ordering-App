import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contents";
import ResCategory from "./ResCategory";

const RestaurantMenu = () =>{

    const[resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect( () => {
        fetchMenu();
    },[resId]);
    
    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

   if(resInfo===null)  return <Shimmer/> ;
 

    // console.log(resInfo);
    // const {name,cuisines,costForTwo,avgRating} = resInfo?.cards[2]?.card?.card?.info;

    // const restaurantInfo = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // || {};
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] ==
    //      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //      console.log(categories);
    // const {
    //     name = 'N/A',
    //     cuisines = [],
    //     costForTwo = 'N/A',
    //     avgRating = 'N/A'
    // } = restaurantInfo;
    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};

    const {
        name,
        cuisines ,
        costForTwo ,
        avgRating
    } = restaurantInfo;

    
    
    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]
    =="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    console.log(categories);

    return(
       <div className = "text-center">
        
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
        
            <p className="font-semibold text-lg">Cuisines: {cuisines.join(", ")} </p>  
            <p>Average Rating: {avgRating} ★ </p>
         
            {/* categories accordions */}
            {categories.map((category)=> 
            <ResCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
       </div> 
    )
}

export default RestaurantMenu;