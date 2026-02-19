const RestaurantCard = (props) => {

    const { resData } = props;
    return (
        <div className="res-card">
             <img className="res-image"
              alt="res-image"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c75ff48c-b373-4733-8126-e3180cbb0fa0_344287.jpg"/>          
                     <h3>Biryani's and more</h3>  
                     <h4>Biryani | Roti | Starters</h4>
                     <h4>4.5 Rating</h4>
        </div>
    )
}

export default RestaurantCard;