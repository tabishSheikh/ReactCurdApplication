import React, { useState, useEffect } from "react";
import './AddItemForm.scss';
import Button from "../../Button/Button";

const ItemCreationForm = ({ onAddItem }) => {
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemSKU, setItemSKU] = useState('');
    const [newItem, setNewItem] = useState({});

    // Fetch categories for dropdown
    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch('http://localhost:3001/categories');
            const { categories } = await res.json();
            setCategoryOptions(categories);
        };

        fetchCategories();
    }, []);

    // Update item state on input changes
    useEffect(() => {
        setNewItem({ 
            category_id: categoryId, 
            title: itemName, 
            description: itemDescription, 
            price: itemPrice, 
            quantity: itemQuantity, 
            sku: itemSKU 
        });
    }, [categoryId, itemName, itemDescription, itemPrice, itemQuantity, itemSKU]);

    const handleSubmitItem = () => {
        console.log("ItemCreationForm handleSubmitItem triggered");
        onAddItem(newItem);
        resetFormFields();
    }

    const resetFormFields = () => {
        setCategoryId('');
        setItemName('');
        setItemDescription('');
        setItemPrice('');
        setItemQuantity('');
        setItemSKU('');
        console.log("Form fields reset");
    }

    return (
        <div className="Form">
            <Button onClick={handleSubmitItem} title="Submit New Item" />
            <br />
            <label>Category:</label>
            <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                <option value="">Select a category</option>
                {categoryOptions.map(option => (
                    <option key={option.category_id} value={option.category_id}>
                        {option.category_name}
                    </option>
                ))}
            </select>
            <br />
            <label>Item Name:</label>
            <input type="text" placeholder="Enter item name" value={itemName} onChange={e => setItemName(e.target.value)} />
            <br />
            <label>Item Description:</label>
            <input type="text" placeholder="Enter description" value={itemDescription} onChange={e => setItemDescription(e.target.value)} />
            <br />
            <label>Item Price:</label>
            <input type="text" placeholder="Enter price" value={itemPrice} onChange={e => setItemPrice(e.target.value)} />
            <br />
            <label>Item Quantity:</label>
            <input type="text" placeholder="Enter quantity" value={itemQuantity} onChange={e => setItemQuantity(e.target.value)} />
            <br />
            <label>Item SKU:</label>
            <input type="text" placeholder="Enter SKU" value={itemSKU} onChange={e => setItemSKU(e.target.value)} />
        </div>
    );
}

export default ItemCreationForm;

