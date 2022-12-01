const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4321;

app.get('/', (request, response) => {
  response.send('hello world')
})

app.get('/dburl', (req, res) => {
    res.send(`My connection string is: ${process.env.DATABASE_URL}`)
  });

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`); //completely optional
});