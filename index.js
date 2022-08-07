require('dotenv').config();
const express = require('express');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/product.routes')(app);

app.listen(3000, () => console.log('Server running on port 3000!'))