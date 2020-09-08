const express = require('express');
const app = express();
// Api routes
const routes = require('./network/routes');
// System config
const { config } = require('./config/index');
// Midelwares
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const bodyParser = require('body-parser');

// body parser
app.use(express.json());
  // -- parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// routes
routes(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);
//app.use(config.publicRoute, express.static('public'));
app.listen(config.port, function() {
  console.log(`Listening http://${config.ip}:${config.port}`);
});
