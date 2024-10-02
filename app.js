
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes
const routerApi = require('./routes');
// Routes middlewere
const { logErrors, boomErrorHandler, errorsHandler } = require('./middlewares/error.handler');

const app = express();
app.use(cors());
app.use(express.json());

//Strategies
require("./utils/auth")

app.get('/api',(req, res)=>{
  res.send('el api esta viva!!')
})


routerApi(app);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));




//middlewere
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorsHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
