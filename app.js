const express = require('express');
const app = express();
const catRouter = require('./routes/catRouter');

app.use(express.static('public'));
app.use(express.json());
app.use('/css', express.static(__dirname + 'public/css'));


app.set('view engine', 'ejs');
app.use('/', catRouter);

/*app.get('/', (req, res) => {
    res.render('index');
})*/



const port = 3000;
app.listen(port, () => {
    console.log(`server started with port ${port}`);
})