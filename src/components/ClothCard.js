import{CDN_URL} from "../utils/contents";

const ClothCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId,
        name,avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    } = resData?.info;
    return(
     <div className = "clo-card m-4 p-4 w-[250px] bg-gray-200 shadow-md rounded-md shadow-fuchsia-400 hover:bg-rose-200">
        <img className="clo-logo rounded-md" src = {CDN_URL+cloudinaryImageId}/>
       <h3 className="font-sans font-bold py-2 text-lg text-fuchsia-950">{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating}</h4>
       <h4>{deliveryTime}</h4>
       <h4>{costForTwo}</h4>
     </div>
);
};

export const withVegLabel = (ClothCard) =>{
    return(props)=> {
        return(
            <div>
              <label className="absolute bg-green-950 text-white m-2 p-2 rounded-lg shadow-md">
                Veg</label>
              <ClothCard {...props}/>
            </div>
        );
    };
};

export default ClothCard;