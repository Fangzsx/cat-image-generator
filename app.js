const express = require('express');
const fs = require('fs');

const app = express();

const cats = JSON.parse(String(fs.readFileSync(`${__dirname}/./dev-data/data/cat-image-list.json`)));

console.log(cats);

const port = 3000;
app.listen(port, () => {
    console.log(`server started with port ${port}`);
})