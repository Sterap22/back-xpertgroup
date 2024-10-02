const express = require('express');

const userRouter = require('./users')
const catsRouter = require('./cats')
const imagesRouter = require('./images')

function routerApi(app){
  // version 1
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/users', userRouter);
  router.use('/cats', catsRouter);
  router.use('/images', imagesRouter);
}

module.exports = routerApi;
