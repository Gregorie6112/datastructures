const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.status(200).send('Hello from get');
})

app.listen(PORT, () => {
  console.log('Server is running on 3000');
})