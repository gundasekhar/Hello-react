import Shimmer from "./Shimmer";
import restaurantMenuData from "../utils/restaurantMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const [showIndex,setShowIndex] = useState(null)

  const regularCards = restaurantMenuData[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  if(regularCards === null) return <Shimmer />
  return(
    <div>
          {regularCards.map((category,index) =>( 
          <RestaurantCategory 
          data={category?.card?.card} 
          key={category?.card?.card?.categoryId}
          showItems = {index === showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}
          />
          ))}
    </div>
  )
}

export default RestaurantMenu;