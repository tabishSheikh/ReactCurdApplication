import React from "react";
import TableRow from "../CategoryTableRow/CategoriesTableRow.js";
import './CategoriesTable.scss';

const CategoriesTable = ({ categories, onEditCategory, onDeleteCategory }) => {
    //trigger edit operation
    const handleEditCategory = (category) => {
        console.log("edit triggered");
        onEditCategory(category);
    };

    //trigger delete operation
    const handleDeleteCategory = (category) => {
        console.log("delete triggered");
        onDeleteCategory(category);
    };

    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <TableRow
                            key={category.category_id}
                            index={index}
                            category={category}
                            onEditCategory={handleEditCategory}
                            onDeleteCategory={handleDeleteCategory}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesTable;
