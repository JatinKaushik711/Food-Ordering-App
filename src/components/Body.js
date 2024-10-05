import ClothCard, {withVegLabel} from './ClothCard';
// import resList from '../utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
   
    const [listofRest,setListofRest] = useState([]);

    const[searchText,setSearchText] = useState("");

    const RestaurantCardVeg = withVegLabel(ClothCard);

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async() =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListofRest(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus==false) return(<h1>Looks like you are Offline!! Please Check you Internet Connection</h1>);
    
    if(listofRest.length==0){
        return <h1><Shimmer/></h1>;
    }

    


    return(
    <div className = "body bg-slate-50">
     <div className= "filter flex items-center">
        <div className = "m-4 p-4">
            <input type = "text"
            className="border border-solid border-green-950 pl-2 pr-14 py-1.5  rounded-lg shadow-md hover: cursor-text" 
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            />
            <button className = "px-4 py-2 m-4 bg-rose-200 shadow-md rounded-lg  hover:bg-rose-400"
             onClick={()=>{
                console.log(searchText);
                const filteredRes = listofRest.filter(
                    (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setListofRest(filteredRes);

             }}
            >Search</button>

        </div>
        <div className='m-4 p-4'>
        <button
          className = "filter-btn px-4 py-2  bg-rose-200 shadow-md rounded-lg hover:bg-rose-400"
          onClick={()=>{
            //Filter Logic
            const filteredList = listofRest.filter((resData) => resData.info.avgRating>4.3);
            setListofRest(filteredList);
             }}>Top-Rated-Restaurants</button>
        </div>
     </div>
     <div className = "clo-container flex flex-wrap items-center mx-12">
        {
            listofRest.map((restaurant) => (
            <Link className='clo-container-text'
            key = {restaurant.info.id}
            to={"/restaurants/"+restaurant.info.id}>
              {restaurant.info.veg ? <RestaurantCardVeg resData={restaurant}/> 
              :  <ClothCard  resData={restaurant}/>}
               
                </Link>))
        }
     </div>
    </div>
    );
    };

export default Body;