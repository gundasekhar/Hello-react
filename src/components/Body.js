import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState()

    useEffect(() => {
        console.log("useEffect Called")
        fetchData()
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4375084&lng=78.4482441&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
    console.log(setListOfRestaurants)
    }

    if(listOfRestaurants === 0){
        return <Shimmer />;
    }

     const resObj = {
        
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "81962",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/eef91554-c4ed-4ddd-b2c0-3db4e5d6a942_81962.JPG",
"locality": "SR Nagar",
"areaName": "SR Nagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.1,
"parentId": "721",
"avgRatingString": "4.1",
"totalRatingsString": "19K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 0.8,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "0.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-02-19 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "70% OFF",
"subHeader": "UPTO ₹140"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "2.1K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-971f09af-71d1-41aa-9c4b-714af69a3c46"
},
"cta": {
"link": "https://www.swiggy.com/city/hyderabad/pizza-hut-sr-nagar-rest81962",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

    }
    
    return (
        <div className="body">
            <div className="filter">
                {/* <div className="search">Search</div> */}
                <button
                className="filter-btn"
                onCanPlay={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList)
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                     {/* {
                        listOfRestaurants.map(() => (
                            <RestaurantCard />
                        ))
                    }   */}
                    <RestaurantCard />
            </div>   
        </div>
    )
}

export default Body;