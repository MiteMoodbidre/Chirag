// App.js

import React, { useState } from 'react';
import axios from 'axios';

const Sales = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');

    try {
      const newItem = { name: itemName, description: itemDescription };
      const response = await axios.post('/api/items', newItem);

      setItems([...items, response.data]);
      setItemName('');
      setItemDescription('');
      console.log('Item added successfully:', response.data);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;
