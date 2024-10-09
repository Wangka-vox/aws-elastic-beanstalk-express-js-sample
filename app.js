const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('For the Emporer of mankind (sorry I love Warhammer)'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
