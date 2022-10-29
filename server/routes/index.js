// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let faculty = require("../models/faculties");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    faculties: "",
  });
});

router.get("/faculties", (req, res, next) => {
  res.render("faculties", {
    title: "Faculties",
    faculties: "",
  });
});


module.exports = router;
