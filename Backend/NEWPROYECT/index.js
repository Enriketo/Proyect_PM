const createError = require('http-errors');
const express = require('express');
const path = require('path');
const usersRouter = require('./server/routes/users');

const app = express();

//(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api', usersRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//// error handler
//app.use(function(err, req, res, next) {
//  // set locals, only providing error in development
//  res.locals.message = err.message;
//  res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//  // render the error page
//  res.status(err.status || 500);
//  res.render('error');
//});


app.listen(3008, function() {
  console.log(`Listening http://localhost:3008`);
});

module.exports = app;
