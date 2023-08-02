import React from "react";
import './header.css';
const Header = () => {
    return (
        <div>
            <div className="icon">
                <div className="meal">Freshmeal</div>

                <div className="cart"><img src="\images\cart.png" alt="cartimage" 
                style={{width:'30px',height:'30px'}}/>YourCart<p>0</p></div>
            </div>
            <div className="image"><img src="\images\header.webp" alt="header" style={{width:'100%', height:'300px'}}/>
             <div className="image1">
             <h1>Delicious food , Delivered to you</h1><p>
                choose your favourtoe meal from our broad selection 
                of available meals and enjoy a delicious lunch or dinner at home.
                All our meals are cooked with high-quality ingredients, just in time
                and ofcourse by experienve chef.</p></div>
                </div>
        </div>
    )
}
export default Header;