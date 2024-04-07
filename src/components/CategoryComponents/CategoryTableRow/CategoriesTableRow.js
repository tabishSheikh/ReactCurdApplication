import React from "react";
import './CategoriesTableRow.scss';

const CategoriesTableRow = (props) => {
    const { category, index, onEditCategory, onDeleteCategory } = props;

    const confirmAndDelete = (category) => {
        if (window.confirm('Delete, you sure?')) onDeleteCategory(category);
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{category.category_name}</td>
            <td>
                <button onClick={() => onEditCategory(category)}>Edit</button>
                <button onClick={() => confirmAndDelete(category)}>Delete</button>
            </td>
        </tr>
    );
};

export default CategoriesTableRow;
