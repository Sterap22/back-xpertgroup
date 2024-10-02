
const axios = require('axios');

exports.fetchAllBreeds = async () => {
  try {
    const response = await axios.get(`${process.env.CAT_API}v1/breeds`, {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cat breeds');
  }
};


exports.fetchBreedById = async (breed_id) => {
  try {
    const response = await axios.get(`${process.env.CAT_API}v1/breeds/${breed_id}`, {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch the breed');
  }
};


exports.searchBreeds = async (query) => {
  try {
    const response = await axios.get(`${process.env.CAT_API}v1/breeds/search?q=${query}`, {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to search breeds');
  }
};
