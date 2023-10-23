import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import Electronics from './Electronics';
import HomePage from './HomePage';
import Grocery from './Grocery';
import Cpp from './Cpp';

const Buttom=()=>{
    return(
        <div className="home-buttom">
            <div className="footer-content">
                <div className="content_1">
                    <ul>
                        <li>
                        <NavLink exact activeClassName="active" className="home" to="/HomePage">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active" className="electronics" to="/Electronics">Electronics</NavLink>
                        </li>
                        <li>
                        <NavLink exact activeClassName="active" className="electronics" to="/Grocery">Grocery</NavLink>
                        </li>
                        <li>
                        <NavLink exact activeClassName="active" className="electronics" to="/Cpp">Cpp</NavLink>
                        </li>
                        <li>
                        <NavLink exact activeClassName="active" className="electronics" to="/">About us</NavLink>
                        </li>
                        <li>
                        <NavLink exact activeClassName="active" className="electronics" to="/">Contact us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="content_2">
                    <ul>
                        <li><a href="" className="item_1">Mobile</a></li>
                        <li><a href="" className="item_2">Laptop</a></li>
                        <li><a href="" className="item_3">Watch</a></li>
                        <li><a href="" className="item_4">Printer</a></li>
                        <li><a href="" className="item_5">Home Applinnces</a></li>
                        <li><a href="" className="item_6">Keyboard & mouse</a></li>
                        <li><a href="" className="item_7">Sound</a></li>
                        <li><a href="" className="item_8">TV</a></li>
                    </ul>
                </div>
                <div className="content_3">
                <ul>
                        <li><a href="" className="item_1">Tomato</a></li>
                        <li><a href="" className="item_2">Potato</a></li>
                        <li><a href="" className="item_3">Rice</a></li>
                        <li><a href="" className="item_4">Floor</a></li>
                        <li><a href="" className="item_5">Pea</a></li>
                        <li><a href="" className="item_6">Onion</a></li>
                        <li><a href="" className="item_7">Ginger</a></li>
                    </ul>
                </div>
                <div className="content_4">
                <ul>
                        <li><a href="" className="item_1">Terma and condition</a></li>
                        <li><a href="" className="item_2">Privecy Policy</a></li>
                        <li><a href="" className="item_3">Help</a></li>
                        <li><a href="" className="item_4">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Buttom;