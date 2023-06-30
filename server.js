const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://sankarsiva6464:6384140761@ejs-node.ip4ogah.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));


app.use('/', routes);


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
