import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../CSS/Slider.css";

const images = [
    { url: window.location.origin + '/images/sliderImage/c.jpg' },
    { url: window.location.origin + '/images/sliderImage/c1.jpg' },
    { url: window.location.origin + '/images/sliderImage/c3.jpg' },
    { url: window.location.origin + '/images/sliderImage/c4.jpg' },
    { url: window.location.origin + '/images/sliderImage/c7.jpg' },
    { url: window.location.origin + '/images/sliderImage/c8.jpg' },
    { url: window.location.origin + '/images/sliderImage/c9.jpg' },
  // Add more image objects if needed
];

const Slider = () => {
    const [sliderOptions, setSliderOptions] = useState({
        useGPURender: true,
        showNavs: true,
        showBullets: true,
        loop: true,
        autoPlay: true,
        autoPlayDelay: 2,
        startIndex: 1,
        navStyle: 1,
        navSize: 50,
        navMargin: 30,
        duration: 0.5,
        bgColor: '#000',
    });

    // Aspect ratio of your images (replace with your actual aspect ratio)
    const aspectRatio = 10 / 9;

    // Calculate the corresponding height based on the width and aspect ratio
    const sliderWidth = 500;
    const sliderHeight = 300;

    

    return (
        <div>
        <div className="slider-container">
            {/* Apply the slider styles */}
            <div
            className="slider-wrapper"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: sliderHeight + "px",
            }}
            >
            <SimpleImageSlider
                style={{ margin: '0 ', marginTop: '0px' }}
                width={sliderWidth}
                height={sliderHeight}
                images={images}
                showBullets={sliderOptions.showBullets}
                showNavs={sliderOptions.showNavs}
                loop={sliderOptions.loop}
                autoPlay={sliderOptions.autoPlay}
                autoPlayDelay={sliderOptions.autoPlayDelay}
                startIndex={sliderOptions.startIndex}
                useGPURender={sliderOptions.useGPURender}
                navStyle={sliderOptions.navStyle}
                navSize={sliderOptions.navSize}
                navMargin={sliderOptions.navMargin}
                slideDuration={sliderOptions.duration}
                slideStyle={{ objectFit: "cover" }} // Set the objectFit property for images
            />
            </div>
        </div>
        </div>
    );
};

export default Slider;
