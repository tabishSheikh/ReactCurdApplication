import React, { useState, useEffect } from "react";
import './EditItemForm.scss';
import Button from "../../Button/Button";

const ItemUpdateForm = ({ item, onEditItem }) => {
    const [itemCategories, setItemCategories] = useState([]);
    const [selectedCategoryId, updateSelectedCategoryId] = useState('');
    const [itemTitle, setItemTitle] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemSKU, setItemSKU] = useState('');
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch('http://localhost:3001/categories');
            const { categories } = await res.json();
            setItemCategories(categories);
        }

        fetchCategories();
    }, []);

    useEffect(() => {
        if (item) {
            updateSelectedCategoryId(item.category_id || '');
            setItemTitle(item.title || '');
            setItemDescription(item.description || '');
            setItemPrice(item.price || '');
            setItemQuantity(item.quantity || '');
            setItemSKU(item.sku || '');
        }
    }, [item]);

    useEffect(() => {
        setCurrentItem({
            category_id: selectedCategoryId,
            title: itemTitle,
            description: itemDescription,
            price: itemPrice,
            quantity: itemQuantity,
            sku: itemSKU
        });
    }, [selectedCategoryId, itemTitle, itemDescription, itemPrice, itemQuantity, itemSKU, item]);

    const handleUpdateItem = () => {
        console.log("ItemUpdateForm handleUpdateItem triggered");
        onEditItem({ ...currentItem, item_id: item.item_id });
    };

    return (
        <div className="Form" style={{ marginTop: '20px' }}>
            <Button onClick={handleUpdateItem} title="Update Item Details" />
            <br />
            <label>Category:</label>
            <select value={selectedCategoryId} onChange={e => updateSelectedCategoryId(e.target.value)}>
                <option value="">Choose a category</option>
                {itemCategories.map(cat => (
                    <option key={cat.category_id} value={cat.category_id}>
                        {cat.category_name}
                    </option>
                ))}
            </select>
            <br />
            <label>Item Title:</label>
            <input type="text" placeholder="Enter item title" value={itemTitle} onChange={e => setItemTitle(e.target.value)} />
            <br />
            <label>Item Description:</label>
            <input type="text" placeholder="Describe the item" value={itemDescription} onChange={e => setItemDescription(e.target.value)} />
            <br />
            <label>Item Price ($):</label>
            <input type="text" placeholder="Set price" value={itemPrice} onChange={e => setItemPrice(e.target.value)} />
            <br />
            <label>Item Quantity:</label>
            <input type="text" placeholder="Available quantity" value={itemQuantity} onChange={e => setItemQuantity(e.target.value)} />
            <br />
            <label>Item SKU:</label>
            <input type="text" placeholder="Stock Keeping Unit" value={itemSKU} onChange={e => setItemSKU(e.target.value)} />
        </div>
    );
}

export default ItemUpdateForm;
