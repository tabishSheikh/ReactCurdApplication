import React, { useState, useEffect } from "react";
import './EditCategoryForm.scss';
import Button from "../../Button/Button";

const CategoryEditForm = ({ category: initialCategory, onUpdateCategory }) => {
    const [editedCategory, setEditedCategory] = useState(initialCategory || {});

    //Sync local state when prop updates
    useEffect(() => {
        setEditedCategory(initialCategory);
    }, [initialCategory]);

    // Handle category name change
    const handleCategoryChange = (newName) => {
        setEditedCategory(prevState => ({ ...prevState, category_name: newName }));
    };

    //category update
    const updateCategoryHandler = () => {
        console.log("CategoryEditForm updateCategoryHandler triggered");
        onUpdateCategory(editedCategory);
    };

    return (
        <div className="Form">
            <label htmlFor="categoryName">Edit Category Name:</label>
            <input
                id="categoryName"
                type="text"
                placeholder="Enter Category Name"
                value={editedCategory.category_name || ''}
                onChange={e => handleCategoryChange(e.target.value)}
            />
            <br />
            <Button onClick={updateCategoryHandler} title="Update Category" />
        </div>
    );
};

export default CategoryEditForm;

