//COMP229-F2022-MidTerm-301178335 - Vivian Dang 301178335 - COMP229 Midterm Assignment (Faculties)
let mongoose = require("mongoose");

// create a model class
// class is used to define what a "Faculty" is, and will be connected to our MongoDB Atlas database
let Faculty = mongoose.Schema(
  {
    //Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
  {
    collection: "faculty",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
