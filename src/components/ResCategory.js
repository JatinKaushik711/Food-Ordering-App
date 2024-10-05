import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({data}) => {
    
    const[showItems,setShowItems] = useState(false);

    const handleClick= () =>{
       setShowItems(!showItems);
    };
   return (
   <div>
       <div className="w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-4 shadow-fuchsia-300 hover:bg-rose-100">
       <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold">{data.title} ({data.categories.length})</span>
        <span>⬇</span>
        </div>
        {showItems && <ItemList items={data.categories}/>}
       </div>
       
   </div> 
   )
}

export default ResCategory;