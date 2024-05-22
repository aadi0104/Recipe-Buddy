import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';
import SelectedDishModal from "./SelectedDishModal";

function CategoryModalComponent(props) {

    const [dishes, setDishes] = useState([]);
    const [selectedDish, setSelectedDish] = useState("");
    const [open, setOpen] = useState(false);

    const fetchDishes = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.selectedCategory.category}`);
        const data = await response.json();
        const result = data["meals"];
        setDishes(result);
    }

    useEffect(() => {
        fetchDishes();
    }, []);

    const close = () => {
        setOpen(false);
    }

    return (
        <div className="modal">
            <Modal
                show={props.openModal}
                onHide={props.closeModal}
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3>
                            {props.selectedCategory.category}
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="row mx-auto my-3 container" id="category-desc">
                            <div className="col-sm">
                                <Image src={props.selectedCategory.image} alt={props.selectedCategory.category} />
                            </div>
                            <div className="col-sm-7">
                                <p>
                                    {props.selectedCategory.description}
                                </p>
                            </div>
                        </div>
                        <h2>
                            Dishes:
                        </h2>
                        <div className="cards">
                            {
                                dishes.map((dish) => {
                                    return (
                                        <Card key={dish.idMeal} className="categories" onClick={() => { setSelectedDish(dish.strMeal); setOpen(true); }}>
                                            <Image src={dish.strMealThumb} />
                                            <p>
                                                {dish.strMeal}
                                            </p>
                                        </Card>
                                    );
                                })
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {open && <SelectedDishModal selectedDish={selectedDish} open={open} close={close} />}
        </div>
    );
}

export default CategoryModalComponent;