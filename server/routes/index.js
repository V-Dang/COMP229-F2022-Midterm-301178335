//COMP229-F2022-MidTerm-301178335 - Vivian Dang 301178335 - COMP229 Midterm Assignment (Faculties)
// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let faculty = require("../models/faculties");

/* GET home page. wildcard */
//SEE VIEWS/CONTENT FOLDER
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    faculties: "",
  });
});

//SEE VIEWS/FACULTIES FOLDER
router.get("/faculties", (req, res, next) => {
  res.render("faculties", {
    title: "Faculties",
    faculties: "",
  });
});


module.exports = router;
