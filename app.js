const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));


app.set('view engine', 'ejs');
const cats = JSON.parse(String(fs.readFileSync(`${__dirname}/./dev-data/data/cat-image-list.json`)));



app.get('/', (req, res) => {
    res.render('index');
})

const port = 3000;
app.listen(port, () => {
    console.log(`server started with port ${port}`);
})