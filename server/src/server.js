// server/src/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const shiftRoutes = require('./routes/shiftRoutes');
const dbConfig = require('./config/db');

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection disconnected through app termination');
    process.exit(0);
  });
});

app.use(express.json());

// Define your routes
app.use('/', routes);
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/shifts', shiftRoutes); // Include shift routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
