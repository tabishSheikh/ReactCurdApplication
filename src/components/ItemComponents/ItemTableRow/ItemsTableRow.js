// ItemsTableRow.js
import React from "react";
import './ItemsTableRow.scss';

const ItemsTableRow = ({ item, index, onEditItem, onDeleteItem }) => {
    return(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.category_id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.sku}</td>
            <td>
                <button onClick={() => onEditItem(item)}>Edit</button>
                <button onClick={() => {
                    if (window.confirm('Delete, you sure?'))
                        onDeleteItem(item);
                    }
                }>Delete</button>
            </td>
        </tr>
    );
};

export default ItemsTableRow;
