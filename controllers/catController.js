const fs = require('fs');

const images = JSON.parse(String(fs.readFileSync(`${__dirname}/../dev-data/data/cat-image-list.json`)));

exports.getRandomImage = (req, res) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const image = images[randomIndex];

        res.status(200).json({
            status : 'success',
            data : {
                image
            }
        })
}