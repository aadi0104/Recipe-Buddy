import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import CategoryModalComponent from "./CategoryModalComponent";


function CategoryCardsComponent() {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await response.json();
            var result = data["categories"];
            setCategories(result);
        } catch (error) {
            console.log(error);
        }
    };

    const closeModal = () => {
        setOpenModal(false);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <>
            <div className="cards">
                {categories.map((category) => (
                    <Card className="categories" key={category.idCategory} onClick={() => { setSelectedCategory({ category: category.strCategory, image: category.strCategoryThumb, description: category.strCategoryDescription }); setOpenModal(true); }}>
                        <Image className="img-fluid" src={category.strCategoryThumb} alt="Category-Image" />
                        <p>
                            {category.strCategory}
                        </p>
                    </Card>
                ))}
            </div>
            {openModal && <CategoryModalComponent selectedCategory={selectedCategory} closeModal={closeModal} openModal={openModal} />}
        </>
    );
}

export default CategoryCardsComponent;