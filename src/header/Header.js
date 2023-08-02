import React from "react";
import './header.css';
const Header = () => {
    return (
        <div>
            <div className="icon">
                <div className="meal">Freshmeal</div>

                <div className="cart"><img src="\images\cart.png" 
                style={{width:'30px',height:'30px'}}/>YourCart<p>0</p></div>
            </div>
            <div className="image"><img src="\images\header.webp" alt="header" style={{width:'100%', height:'250px'}}/></div>
        </div>
    )
}
export default Header;