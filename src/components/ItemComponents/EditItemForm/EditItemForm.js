import React, { useState, useEffect } from "react";
import './EditItemForm.scss';
import Button from "../../Button/Button";

const EditItemForm = props => {
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');
    const [item, setItem] = useState({});

    useEffect(() => {
        const retrieveCategories = async () => {
            const response = await fetch('http://localhost:3001/categories');
            const data = await response.json();
            setCategories(data.categories);
        };

        retrieveCategories();
    }, []);

    useEffect(() => {
        if (props.item) {
            setCategoryId(props.item.category_id || '');
            setTitle(props.item.title || '');
            setDescription(props.item.description || '');
            setPrice(props.item.price || '');
            setQuantity(props.item.quantity || '');
            setSku(props.item.sku || '');
        }
    }, [props.item]);

    useEffect(() => {
        setItem({ 
            category_id: categoryId, 
            title, 
            description, 
            price, 
            quantity, 
            sku 
        });
    }, [categoryId, title, description, price, quantity, sku, props.item]);

    const _editItem = () => {
        console.log("EditItemForm _editItem triggered");
        const updatedItem = { ...item, item_id: props.item.item_id };
        props.onEditItem(updatedItem);
    };

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onClick={_editItem} title="Save Item" />
            <br />
            <label>Category:</label>
            <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                <option value="">Select a category</option>
                {categories.map(category => (
                    <option key={category.category_id} value={category.category_id}>
                        {category.category_name}
                    </option>
                ))}
            </select>
            <br />
            <label>Title:</label>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <br />
            <label>Description:</label>
            <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <br />
            <label>Price:</label>
            <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
            <br />
            <label>SKU:</label>
            <input type="text" placeholder="SKU" value={sku} onChange={e => setSku(e.target.value)} />
        </div>
    );
}

export default EditItemForm;
