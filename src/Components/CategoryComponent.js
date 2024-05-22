import React from "react";
import CategoryCardsComponent from "./CategoryCardsComponent";


function CategoryComponent() {
    return (
        <div id="categ-head">
            <h1>
                Categories:
            </h1>
            <div>
                <CategoryCardsComponent />
            </div>
        </div>
    );
}

export default CategoryComponent;