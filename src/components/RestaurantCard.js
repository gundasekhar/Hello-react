import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const { resData } = props;
    return (
        <div className="res-card">
             <img className="res-image"
             alt="res-image"
            src={CDN_URL+resData.info.cloudinaryImageId}/>
                     <h3>{resData.info.name}</h3>   
                     <h4>{resData.info.cuisines}</h4>
                      <h4>{resData.info.avgRating} stars</h4> 
                      <h4>{resData.info.sla.deliveryTime} min</h4>
        </div>
    )
}

export default RestaurantCard;