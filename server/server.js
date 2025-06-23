const express = require('express');
const cors = require('cors');
const calculatorController = require('./controllers/calculatorController');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/calculate', calculatorController.calculate);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});