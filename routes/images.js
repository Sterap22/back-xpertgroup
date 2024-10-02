
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/images');


router.get('/imagesbybreedid/:breed_id', imageController.getImagesByBreedId);

module.exports = router;
