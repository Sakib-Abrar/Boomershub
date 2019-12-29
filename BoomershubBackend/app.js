var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var multer = require("multer");

var indexRouter = require("./routes/index");
var propertiesRouter = require("./routes/properties.route");
var scrapperRouter = require("./routes/scrapper.route");
var imageRouter = require("./routes/images.route");
var bodyParser = require("body-parser");

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.set("view engine", "pug");
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  multer({
    dest: path.join(__dirname, "public/upload/temp")
  }).any()
);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", indexRouter);
app.use("", propertiesRouter);
app.use("", scrapperRouter);
app.use("", imageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).render("error");
});

module.exports = app;
