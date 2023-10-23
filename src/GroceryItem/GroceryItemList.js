import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputData } from '../components/action';
const GroceryItemList = () => {
    const dispatch = useDispatch();     


const handleButtonClick = (itemName) => {
    const value = itemName;
    dispatch(setInputData(value));
};
    const groceryItems = [
        { id: 1, name: 'Rice', type: 'rice' },
        { id: 2, name: 'Ginger', type: 'ginger' },
        { id: 3, name: 'Tomato', type: 'tomato' },
        { id: 4, name: 'Flour', type: 'flour' },
        { id: 5, name: 'Pea', type: 'pea' },
        { id: 6, name: 'Onion', type: 'onion' },
        { id: 7, name: 'Dry Fruits', type: 'dry' },
        { id: 8, name: 'Suger', type: 'suger' },
        // Add more items as needed
        ];
        return(
            <div >
                {groceryItems.map((item) => (
                <div key={item.id} className="grocery-item" onClick={()=> handleButtonClick(item.type)}> 
                    {item.name}
                </div>//onClick={() => handleItemClick(item.type)}
                ))}
            </div>
        )
    }

export default GroceryItemList;