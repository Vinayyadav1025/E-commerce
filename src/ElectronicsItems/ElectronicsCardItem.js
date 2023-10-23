    import React from 'react';
    import { useSelector } from 'react-redux';
    import { ElectronicsItem } from './../webService/ElectronicsItem';

    const ElectronicsCardItem = () => {
    const inputData = useSelector((state) => state.inputData);
    const cardData = ElectronicsItem();

    // Filter the cardData based on the matching inputData category
    const filteredCardData = cardData.filter((card) => {
        const category = card.category || '';
        return category.toLowerCase().includes(inputData.toLowerCase());
    });

    // Display message if no matching results found
    if (inputData && filteredCardData.length === 0) {
        return <div className="no-matching-results"><h1 style={{color:"red"}}>No matching results</h1></div>;
    }

    return (
        <div className="home-card">
        <div className="electronics card">
            {filteredCardData.map((card, index) => (
            <div key={index} className={`card_${index + 1}`}>
                <div className="home-item-image">
                <img src={card.imageSrc} alt={card.title} />
                </div>
                <div className="card-text">
                <div className="title">
                    <h2>{card.title}</h2>
                </div>
                <div className="price">
                    <div className="discount">
                    <p>-{card.discount}%</p>
                    </div>
                    M.R.P:
                    <div className="local-price">
                    <p>₹{card.localPrice}</p>
                    </div>
                </div>
                <div className="original-price">
                    <p>Price: ₹{(card.localPrice) - (card.discount * card.localPrice) / 100}</p>
                </div>
                <div className="emi">
                    <p>EMI: ₹{card.emi}</p>
                </div>
                </div>
                <div className="home-item-button">
                <button className="home-item-buy">
                    <h1>BUY</h1>
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default React.memo(ElectronicsCardItem);
        