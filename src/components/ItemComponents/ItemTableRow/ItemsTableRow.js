import React from "react";
import './ItemsTableRow.scss';




// Row component 
const ProductRow = ({ item, index, onEditItem, onDeleteItem }) => {
    //edit action 
    const handleEdit = () => onEditItem(item);




    //delete action with a confirmation dialog
    const confirmAndDelete = () => {
        if (window.confirm('Delete, you sure?')) {
            onDeleteItem(item);
        }
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.category_id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.sku}</td>
            <td>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={confirmAndDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default ProductRow;

