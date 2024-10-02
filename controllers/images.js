
const imageService = require('../services/image.service');

exports.getImagesByBreedId = async (req, res, next) => {
  try {
    const { breed_id } = req.params;
    const images = await imageService.fetchImagesByBreedId(breed_id);
    res.json(images);
  } catch (error) {
    next(error);
  }
};
