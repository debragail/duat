const express = require('express');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = Blockchain();

app.get('/blocks', (req, res) => {
    res.json(bc.chain);
});

app.listen(HTTP_PORT), () => console.log(`Listening no port ${HTTP_PORT}`));
