    import React from 'react';
import { useSelector } from 'react-redux';
import { HomeItem } from './../webService/HomeItem';

    
const Home_Item = () => {
    const inputData = useSelector((state) => state.inputData);
    const cardData = HomeItem();

    return (
        <div className="home-card">
        <div className="grid card">
            {cardData.map((card, index) => (
            <div key={index} className={`card_${index + 1}`}>
                <div className="home-item-image"><img src={card.imageSrc} alt={card.title} /></div>
                <div className="card-text">
                <div className="title">
                    <h2>{card.title}</h2>
                </div>
                <div className="price">
                <div className="discount"><p>-{card.discount}%</p></div>
                M.R.P:<div className="local-price"><p>₹{card.localPrice}</p></div>
                </div>
                <div className="original-price"><p>Price: ₹{(card.localPrice)-(card.discount*card.localPrice)/100}</p></div>
                <div className="emi"><p>EMI: {card.emi}</p></div>
                </div>
                <div className="home-item-button"><button className="home-item-buy"><h1>BUY</h1></button></div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Home_Item;
