/* eslint-disable no-unused-vars */
import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();

    return <nav className ="header">
    <Link to = "/">
    <img className="header__logo" 
    src= "https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png" alt="" />
    </Link>
     
     <div className="header__search">
       <input type ="text" className="header__searchInput"/>
       <SearchIcon className="header__searchIcons" />
     </div>
         {/*  Header links */}
     <div className ="header__nav">
         <Link to = "/login" className = "header__link">
             <div className = "header__option">
                 <span className="header__optionLine1">Hello Muzamil</span>
                 <span className="header__optionLine2">Sign In</span>
             </div>
         </Link>

         <Link to = "/login" className = "header__link">
             <div className = "header__option">
                 <span className="header__optionLine1">Returns</span>
                 <span className="header__optionLine2">& Orders</span>
             </div>
         </Link>

         <Link to = "/login" className = "header__link">
             <div className = "header__option">
                 <span className="header__optionLine1">Your</span>
                 <span className="header__optionLine2">Prime</span>
             </div>
         </Link>
     </div>

     {/* basket with icon cart */}
        <Link to = "/checkout" className="header__link">
           <div className="header__shopping">
             <ShoppingBasketIcon />
<span>{basket?.length}</span>
           </div>
        
        </Link>
        
    

    </nav>
}

export default Header;
