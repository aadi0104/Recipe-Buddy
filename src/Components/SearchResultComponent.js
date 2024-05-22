import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import SelectedDishModal from "./SelectedDishModal";

function SearchResultComponent(props) {

    const [fetchedSearchData, setFetchedSearchData] = useState([]);
    const [foundData, setFoundData] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedDish, setSelectedDish] = useState("");

    const fetchSearchedDish = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchValue}`);
            const data = await response.json();
            const result = await data["meals"];
            setFetchedSearchData(result);
            if (fetchedSearchData.length !== null) {
                setFoundData(false);
                console.log(foundData);
            }
            else {
                setFoundData(true);
                console.log(foundData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSearchedDish();
    }, [props.searchValue]);

    const close = () => {
        setOpen(false);
    }

    return (
        <div id="search-result">
            <h1>
                Showing result for: {props.searchValue}
            </h1>
            <div className="cards" >
                {
                    foundData ?
                        <h2>
                            {props.searchValue} is not found!
                        </h2>
                        :
                        fetchedSearchData === null ?
                            <h2>
                                {props.searchValue} is not found!
                            </h2>
                            :
                            fetchedSearchData.map((dish) => {
                                return (
                                    <Card key={dish.idMeal} className="categories" onClick={() => { setSelectedDish(dish.strMeal); setOpen(true); }}>
                                        <Image src={dish.strMealThumb} />
                                        <p>
                                            {dish.strMeal} {`(${dish.strCategory})`}
                                        </p>
                                    </Card>
                                );
                            })
                }
            </div>
            {open && <SelectedDishModal selectedDish={selectedDish} open={open} close={close} />}
        </div>
    );
}

export default SearchResultComponent;