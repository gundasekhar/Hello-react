import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4375084&lng=78.4482441&restaurantId=914310&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}
export default useRestaurantMenu;