import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

    const userName = useContext(UserContext)

    const {resData} = props;
    const {name,cuisines,avgRating,cloudinaryImageId,sla} = resData?.info ;
    return (
        <div className="res-card m-5 p-2 bg-gray-200 w-[200] rounded-lg">
             <img className="w-50 h-50 p-2"
             alt="res-image"
            src={CDN_URL+cloudinaryImageId}/>
                     <p className="font-bold h-auto">{name}</p>   
                     <p className="h-18">{cuisines.join(", ")}</p>
                     <p className="py-2"><span className="text-red-600 font-bold">{avgRating} </span>stars, <span className="font-semibold">{sla?.deliveryTime} min</span></p> 
                     <p className="font-semibold pb-2">UserName : {userName.loggedInUser}</p>
        </div>
    )
}

export default RestaurantCard;