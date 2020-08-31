const express = require('express');
const app = express();

const config = require('./config/index').default;
const usersApi = require('./routes/users.js');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundhandler')

// body parser
app.use(express.json());

//routes
usersApi(app);

//Cath 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://18.219.3.155:${config.port}`);
});
//  

//const express = require('express');
//const app = express();
//
//const { config } = require('./config/index');
//const moviesApi = require('./routes/movies.js');
//
//moviesApi(app);
//
//app.listen(config.port, function() {
//  console.log(`Listening http://localhost:${config.port}`);
//});