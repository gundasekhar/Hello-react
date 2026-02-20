import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mock_data";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState(resList)
    
    return (
        <div className="body">
            <div className="filter">
                 <div className="search">Search</div> 
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating>4.5
                    )
                    console.log(filteredList)
                    setListOfRestaurants(filteredList)
                }}
                className="filter-btn"
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => 
                    (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) 
               } 
               </div> 
        </div>
    )
}

export default Body;