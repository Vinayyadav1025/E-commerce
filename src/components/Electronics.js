import React from 'react';
import ElectronicsItemList  from './../ElectronicsItems/ElectronicsItemList';
import  ElectronicsSearchBar from './../ElectronicsItems/ElectronicsSearchBar';
import  ElectronicsCardItem  from './../ElectronicsItems/ElectronicsCardItem';
import "../CSS/Electronics/Electronics.css"
function Electronics(){
        return(
            <div className="electronics_component">
                <div className="electronicsall electronics_item_list">
                    <ElectronicsItemList/>
                </div>
                <div className="electronicsall electronics_searchbar">
                    <ElectronicsSearchBar/>
                </div>
                <div className="electronicsall electronics_card_item">
                    <ElectronicsCardItem/>
                </div>
            </div>
        );
}
export default Electronics;