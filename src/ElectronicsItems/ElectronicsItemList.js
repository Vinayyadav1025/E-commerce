    import React from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { setInputData } from '../components/action';
    const ElectronicsItemList = () => {
        const dispatch = useDispatch();     


    const handleButtonClick = (itemName) => {
        const value = itemName;
        dispatch(setInputData(value));
    };
        const electronicsItems = [
            { id: 1, name: 'Mobile', type: 'mobile' },
            { id: 2, name: 'Laptop', type: 'laptop' },
            { id: 3, name: 'Watch', type: 'watch' },
            { id: 4, name: 'Printer', type: 'printer' },
            { id: 5, name: 'Home Appliances', type: 'home_appliances' },
            { id: 6, name: 'Keyboard and mouse', type: 'keyboardandmouse' },
            { id: 7, name: 'Sound', type: 'sound' },
            { id: 8, name: 'TV', type: 'tv' },
            // Add more items as needed
            ];
            return(
                <div >
                    {electronicsItems.map((item) => (
                    <div key={item.id} className="electronics-item" onClick={()=> handleButtonClick(item.type)}> 
                        {item.name}
                    </div>//onClick={() => handleItemClick(item.type)}
                    ))}
                </div>
            )
        }

    export default ElectronicsItemList;