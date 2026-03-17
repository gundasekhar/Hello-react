import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mock_data";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    },[])
    const fetchData =async () => {
        const data =await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json();
            setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        const onlineStatus = useOnlineStatus();

        if(onlineStatus === false){
            return <h1>Looks like your internet connection is lost... Please check your connection.</h1>
        }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="mx-auto">
            <div className="filter flex my-5 sticky top-0">
                 <div className="search">
                <input className="bg-amber-100 w-[300] mx-3 h-10 px-1 rounded-md" type="text" value={searchText} placeholder="Enter Here for Search"
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
                /> 
                <button className="px-4 py-2 bg-green-300 rounded-md"
                onClick={() => {
                 const filterRestaurants = listOfRestaurants.filter((res) => res.info.name.toUpperCase().includes(searchText.toUpperCase()));
                 console.log(filterRestaurants)
                setFilteredRestaurant(filterRestaurants)
                }}
                >Search</button>   
                </div> 
                <button onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating>4.5
                    )
                    console.log(filteredList)
                    setFilteredRestaurant(filteredList)
                }}
                className="px-4 py-2 bg-green-300 mx-4 rounded-md"
                >Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap">
                <Link to="/restaurants" className="flex flex-wrap mx-70">{filteredRestaurant.map((restaurant) => 
                    (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) 
               } </Link>
               <Link to="/restaurants" className="flex flex-wrap mx-70">{filteredRestaurant.map((restaurant) => 
                    (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) 
               } </Link>
               <Link to="/restaurants" className="flex flex-wrap mx-70">{filteredRestaurant.map((restaurant) => 
                    (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    )) 
               } </Link>
               </div>
                
        </div>
    )
}

export default Body;