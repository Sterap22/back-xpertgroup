
const userService = require('../services/user.service');


exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  console.log('Llego aqui ', req.body);
  
  try {
    const token = await userService.registerUser(email, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};


exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await userService.loginUser(email, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
