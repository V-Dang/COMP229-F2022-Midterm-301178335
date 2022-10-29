//COMP229-F2022-MidTerm-301178335 - Vivian Dang 301178335 - COMP229 Midterm Assignment (Faculties)
// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const faculties = require("../models/faculties");

// define the faculty model
let faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get("/", (req, res, next) => {
  // find all faculties in the faculties collection
  faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/index", {title: "Faculties", faculties: faculties});
    }
  })
})

//  GET the faculty Details page in order to add a new faculty
router.get("/add", (req, res, next) => {
  res.render("faculties/add", {title: "Add Faculty"})
});

// POST process the faculty  Details page and create a new faculty  - CREATE
router.post("/add", (req, res, next) => {
  let newFaculty = faculty({
    //Facultyid: req.body.id, 
    "Facultyname": req.body.Facultyname,
    "Department": req.body.Department,
    "Subject": req.body.Subject
  });
  faculty.create(newFaculty, (err, faculty) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {res.redirect('/faculties-list')}
  });
});


// GET the faculty  Details page in order to edit an existing faculty
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;     //id of actual object

  faculty.findById(id, (err, facultyToEdit) => {
      if (err) {
          console.log(err);
          res.end(err);
      } else {
          res.render("faculties/edit", {title: "Edit Faculty", faculties: facultyToEdit});         //show edit view
      }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id
  let updateFaculty = faculty({
    "_id": id,
    "Facultyname": req.body.Facultyname,
    "Department": req.body.Department,
    "Subject": req.body.Subject
  })
  faculty.updateOne({_id: id}, updateFaculty, (err) => {
    if(err){
      console.log(err);
      res.end(err);
      } else {
        res.redirect('/faculties-list');
      }
  })
});


// GET - process the delete
router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;
  faculty.remove({_id:id}, err =>{
    if(err){
      console.log(err);
      res.end(err);
      } else {
        res.redirect('/faculties-list');
      }
  })
});

module.exports = router;
