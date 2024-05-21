// server.js

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/user/signup', (req, res) => {
  // Handle signup logic here
  res.status(200).json({ message: 'Signup successful' });
});

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
