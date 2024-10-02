
const express = require('express');
const router = express.Router();
const catController = require('../controllers/cats');
const passport = require('passport');

// Routes
router.get('/breeds', passport.authenticate('jwt',{ session: false}),catController.getAllBreeds);
router.get('/breeds/:breed_id', catController.getBreedById);
router.get('/breeds/search', catController.searchBreeds);

module.exports = router;
