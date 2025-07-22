const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const playerRoutes=require('./routes/playerRoutes')
require('dotenv').config();

const app = express();
const port = 5500;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from Vite's default port
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/player',playerRoutes)

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
