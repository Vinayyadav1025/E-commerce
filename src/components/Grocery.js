import React from 'react';
import GroceryItemList  from '../GroceryItem/GroceryItemList';
import  ElectronicsSearchBar from './../ElectronicsItems/ElectronicsSearchBar';
import  GroceryCardItem  from '../GroceryItem/GroceryCardItem';
import "../CSS/Grocery/Grocery.css"
function Grocery(){
        return(
            <div className="grocery_component">
                <div className="groceryall grocery_item_list">
                    <GroceryItemList/>
                </div>
                <div className="electronicsall electronics_searchbar">
                    <ElectronicsSearchBar/>
                </div>
                <div className="grocery grocery_card_item">
                    <GroceryCardItem/>
                </div>
            </div>
        );
}
export default Grocery;