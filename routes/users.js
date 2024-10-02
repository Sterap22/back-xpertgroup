
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const validatorHandler = require('../middlewares/validators.handler');
const { createUserSchema } = require('../schemas/user.schema');

router.post('/register', validatorHandler(createUserSchema, 'body'),userController.register);

router.post('/login', validatorHandler(createUserSchema, 'body'),userController.login);

module.exports = router;
