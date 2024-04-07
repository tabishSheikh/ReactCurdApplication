import React from "react";
import ItemRow from "../ItemTableRow/ItemsTableRow.js";
import './ItemsTable.scss';


const ProductTable = ({ items, onEditItem, onDeleteItem }) => {
    // Function to  edit 
    const handleEdit = product => {
        console.log("Editing initiated");
        onEditItem(product);
    };

    // Function to  delete 
    const handleDelete = product => {
        console.log("Deletion initiated");
        onDeleteItem(product);
    };

    return (
        <div className="ProductTable">
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Category ID</th>
                        <th>title</th>
                        <th>Details</th>
                        <th>Cost</th>
                        <th>Stock</th>
                        <th>Code</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((product, index) => (
                        <ItemRow 
                            index={index} 
                            item={product} 
                            key={product.item_id} 
                            onEditItem={handleEdit} 
                            onDeleteItem={handleDelete} 
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;
