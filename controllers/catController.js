const fs = require('fs');
const images = JSON.parse(String(fs.readFileSync(`${__dirname}/../dev-data/data/cat-image-list.json`)));

exports.getRandomImage = (req, res) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const image = images[randomIndex];

        res.render('index');

       /* res.status(200).json({
            status : 'success',
            data : {
                image
            }
        });*/
}

exports.addImage = (req, res) => {
        const newID = images[images.length - 1].id + 1;
        const newImage = Object.assign({id : newID}, req.body);
        console.log(req.body);
        images.push(newImage);
        fs.writeFile(`${__dirname}/dev-data/data/cat-image-list.json`, JSON.stringify(images), err => {
            res.status(201).json({
                status : 'success',
                data : {
                    image : newImage
                }
            })
        })
}