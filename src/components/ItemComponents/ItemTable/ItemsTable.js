// ItemsTable.js
import React from "react";
import TableRow from "../ItemTableRow/ItemsTableRow.js";
import './ItemsTable.scss';

const ItemsTable = props => {
    const editItem = item => {
        console.log("edit triggered");
        props.onEditItem(item);
    }

    const deleteItem = item => {
        console.log("delete triggered");
        props.onDeleteItem(item);
    }

    return(
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SKU</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map(
                            (item, index) => (
                                <TableRow index={ index } item={ item } key={ item.item_id } onEditItem={ editItem } onDeleteItem={ deleteItem } />
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ItemsTable;
