import React, { useState, useEffect } from "react";
import './AddCategoryForm.scss';
import Button from "../../Button/Button";

const AddCategoryForm = ({ onAddCategory }) => {
    const [categoryName, setCategoryName] = useState('');
    const [category, setCategory] = useState({});

    //setting category based on categoryName changes
    useEffect(() => {
        setCategory({ category_name: categoryName });
    }, [categoryName]);

    //handle adding a category
    const handleAddCategory = () => {
        console.log("AddCat triggered");
        onAddCategory(category);
        handleClearCategory();
    };

    //clear the category input field
    const handleClearCategory = () => {
        setCategoryName('');
        console.log("Clear event");
    };

    return (
        <div className="Form">
            <label>Category Name:</label>
            <input
                type="text"
                placeholder="Category Name"
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
            />
            <br />
            <Button onClick={handleAddCategory} title="Add Category" />
        </div>
    );
};

export default AddCategoryForm;
