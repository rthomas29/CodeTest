const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const index = require('./routes/index');

app.use(logger('dev'));
app.use('/', index);
// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
