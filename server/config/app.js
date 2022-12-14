//COMP229-F2022-MidTerm-301178335 - Vivian Dang 301178335 - COMP229 Midterm Assignment (Faculties)
// moddules for node and express
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

// import "mongoose" - required for DB Access
let mongoose = require("mongoose");
// URI
let DB = require("./db");

//TO CONNECT TO MONGODB
mongoose.connect(process.env.URI || DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("Database Connected!..");
});



// DEFINE ROUTERS
let index = require("../routes/index"); // top level routes
let facultiesRouter = require("../routes/faculties"); // routes for faculties

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /client
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../client")));

// ROUTE REDIRECTS
app.use("/", index);
app.use("/faculties", facultiesRouter);
app.use("/faculties-list", facultiesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
