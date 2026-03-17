import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return(
        <div>
        {items.map((item) => 
            <div key={item?.card?.info?.id} className="flex justify-between h-25 mb-2 bg-white p-3">
                <div className="w-3/4">
                    <span className="font-semibold">{item?.card?.info?.name}</span> -
                    <span> &#8377; {item?.card?.info?.price/100}</span>
                    <p className="text-xs mb-2">{item?.card?.info?.description}</p>
                </div>
                <div className="w-1/4 h-20 relative">
                <div>
                <button className="bg-amber-300 px-2 rounded-lg absolute opacity-80 bottom-0 left-4"
                onClick={() => handleAddItem(item)}
                >ADD</button>
                </div>
                <div>
                    <img src={CDN_URL + item?.card?.info?.imageId } className="w-20 h-20"/>
                </div>
                </div>
                
            </div>
        )}
        </div>     
    )
}

export default ItemList;