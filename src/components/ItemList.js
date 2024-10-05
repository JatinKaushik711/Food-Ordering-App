import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contents";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items,dummy}) =>{

    const dispatch = useDispatch();
     
    const handleAddItem  = (items) =>{
        //Dispatch an Action
        dispatch(addItem(items));
    };

    return(
    <div>
        {items.map((items) =>
        (
            <div key = {items.itemCards[0].card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                    <span className="font-semibold">{items.itemCards[0].card.info.name}</span>
                    <span> - ₹ {items.itemCards[0].card.info.price/100 || items.itemCards[0].card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{items.itemCards[0].card.info.
                   description}</p>
              </div> 
              <div className="w-3/12 p-4">
                 
                 <div className="absolute">
                 <button className="p-2 bg-green-950 text-white shadow-md rounded-lg mx-16 "
                   onClick={()=>handleAddItem(items) }>
                     Add +</button>
                 </div>
                 <img src={CDN_URL + items.itemCards[0].card.info.imageId} className="rounded-lg"/>
                 </div>    
            </div>    
        )
        )}
        
    </div>)
};

export default ItemList;