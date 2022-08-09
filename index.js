require('dotenv').config();
const express = require('express');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/product.routes')(app);

// const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/brandykicks-b7445.appspot.com/o/'
// const dir = 'jordans/';
// const file = 'air jordan 1 dior.2.jpeg'
// const imgToken = '0830d53d-d1cc-488a-8f2e-6a86d3a46144';
// const url = `${baseUrl + encodeURIComponent('jordans/' + file)}?alt=media&token=${imgToken}`;

app.listen(3000, () => console.log('Server running on port 3000!'))