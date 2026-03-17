import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{

    // const [showItems,setShowItems]= useState(false)

    const handleClick = () => {
        // setShowItems(!showItems)
        setShowIndex()

    }

    return(
            <div className="bg-gray-200 px-4 py-2 mt-2 w-180 mx-auto">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title} <span className="font-semibold">({data.itemCards.length})</span></span>
                <span className="font-bold">&#8681;</span>
            </div> 
            {showItems ? <ItemList items={data?.itemCards}/> : null}
        </div>
    )
}

export default RestaurantCategory;