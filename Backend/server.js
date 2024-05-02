// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://Pranav:EUL1OmKonbNEsY5S@cluster0.sml5a2s.mongodb.net/new';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Define a schema and model for MongoDB
const Schema = mongoose.Schema;
const itemSchema = new Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    console.error('Error saving item:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
