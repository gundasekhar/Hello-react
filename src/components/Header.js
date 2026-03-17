import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("LogIn")
    const onlineStatus = useOnlineStatus();

    const userName = useContext(UserContext);

    // Subscribing to  the store...
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-200">
            <div className="w-25">
                <img className="logo"
                src={ LOGO_URL } alt="no-image"/>
            </div>
            <div className="flex items-center px-5">
                <ul className="flex">
                    <li className="p-5">OnlineStatus&nbsp; {onlineStatus ? <span>&#x2705;</span> :<span style={{ color: 'white', fontSize: '20px', backgroundColor : "red", padding : '0px 5px',borderRadius : '3px' }}>x</span>}</li>
                    <li className="p-5"><Link to="/">Home</Link></li>
                    <li className="p-5"><Link to="/about">About</Link></li>
                    <li className="p-5"><Link to="/contact">Contact</Link></li>
                    <li className="p-5"><Link to="/cart">Cart-({cartItems.length})</Link></li>
                    <button className="login"
                    onClick={() => {
                        btnName === "LogIn"?setBtnName("LogOut") : setBtnName("LogIn")
                    }}
                    >{btnName}</button>
                    <li className="p-5">{userName.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;