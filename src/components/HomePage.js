import React from 'react';
import "../CSS/HomePage.css"
import Slider from './Slider';
import Quote from './Quote';
import Home_Item from './Home_Item';
import WeatherApp from './WeatherApi';


const HomePage=()=>{
    return(
        <div className="container">
            <div className='main-content'>
                <div className="background-image">
                <div className="slider">
                <Slider/>
                </div>
                <div className="quote">
                <Quote/>
                </div>
                <div className="weather">
                    <WeatherApp/>
                </div>
                </div>
                <div className="home-electronics-item">
                    <Home_Item/>
                </div>
            </div>
        </div>
    )
}
export default HomePage;