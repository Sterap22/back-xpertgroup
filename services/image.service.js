
const axios = require('axios');

exports.fetchImagesByBreedId = async (breed_id) => {
  try {
    const response = await axios.get(`${process.env.CAT_API}v1/images/search?breed_id=${breed_id}`, {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};
