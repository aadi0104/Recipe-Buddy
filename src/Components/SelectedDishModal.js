import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';

function SelectedDishModal(props) {

    const [detail, setDetail] = useState([]);

    const fetchDetails = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.selectedDish}`);
        const data = await response.json();
        const result = await data["meals"][0];
        setDetail(result);
        const ul = document.querySelector("ul");
        let ctr = 1;
        while (true) {
            const li = document.createElement("li");
            li.innerText = result[`strIngredient${ctr}`] + " : " + result[`strMeasure${ctr}`];
            ctr++;
            if (result[`strIngredient${ctr}`] !== undefined || result[`strIngredient${ctr}`] !== "") {
                ul.append(li);
            }
            if (result[`strIngredient${ctr}`] === undefined || result[`strIngredient${ctr}`] === "") {
                break;
            }
        }
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div className="modal">
            <Modal
                show={props.open}
                onHide={props.close}
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3>
                            {detail.strMeal}
                        </h3>
                        <h4>
                            {`${detail.strCategory} | ${detail.strArea}`}
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-bo">
                    <div>
                        <Image src={detail.strMealThumb} />
                    </div>
                    <div className="row container-fluid mx-auto">
                        <div className="col-sm">
                            <h4>
                                Ingredients:
                            </h4>
                            <div>
                                <ul></ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <h4>
                                Instructions:
                            </h4>
                            <p>
                                {detail.strInstructions}
                            </p>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SelectedDishModal;