import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <div className="container">
        <header>
            <div className="navbar">
            <div className="logo">
                {/* Replace with your main logo */}
                <img src="../image/logo192.png" alt="Main Logo" />
            </div>
            <div className="nav-item">
            <div className="nav-link">
                <ul>
                    <li>
                    <NavLink exact activeClassName="active" className="home" to="/HomePage">Home</NavLink>
                    </li>
                    <li>
                    <NavLink activeClassName="active" className="electronics" to="/Electronics">Electronics</NavLink>
                    </li>
                    <li>
                    <NavLink activeClassName="active" className="grocery" to="/Grocery">Grocery</NavLink>
                    </li>
                    <li>
                    <NavLink activeClassName="active" className="cpp" to="/Cpp">CPP</NavLink>
                    </li>
                    <li>
                    <NavLink activeClassName="active" className="signin" to="/Signin">Sign in</NavLink>
                    </li>
                </ul>
                </div>
                <div className="social-icons">
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} style={{ color: '#007bff' }} />
                </a>
                <a href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C' }} />
                </a>
                <a href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2' }} />
                </a>
                </div>
            </div>
            </div>
        </header>
        </div>
    );
};

export default Navbar;
