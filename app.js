var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');


var app = express();

// view engine setup
app.set("views", "./src/views")
app.set('view engine', 'ejs');

//Configuración de la carpeta pública "public"
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));
console.log(publicPath)


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Activando el servidor desde express
app.listen(process.env.PORT || 3000, () => {
  console.log("corriendo servidor en el puerto 3000");
});
