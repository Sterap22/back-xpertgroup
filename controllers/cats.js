
const catService = require('../services/cat.service');


exports.getAllBreeds = async (req, res, next) => {
  try {
    const breeds = await catService.fetchAllBreeds();
    res.json(breeds);
  } catch (error) {
    next(error);
  }
};


exports.getBreedById = async (req, res, next) => {
  try {
    const { breed_id } = req.params;
    const breed = await catService.fetchBreedById(breed_id);
    res.json(breed);
  } catch (error) {
    next(error);
  }
};


exports.searchBreeds = async (req, res, next) => {
  try {
    const { q } = req.query;
    const breeds = await catService.searchBreeds(q);
    res.json(breeds);
  } catch (error) {
    next(error);
  }
};
