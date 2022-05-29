const express = require('express');
const catController = require('./../controllers/catController');

const router = express.Router();

router.route('/')
    .get(catController.getRandomImage)
    .post(catController.addImage)

module.exports = router;