const express = require("express");
const router = express.Router();
const Student = require('../models/Student');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/user/login');
  }

// Signup route
router.get('/students', async(req, res) => {
    // req.flash('error_msg', 'Hello Dear');
    try {
        const students = await Student.find(); // Fetch all students from MongoDB
        res.render('./admin/allStudents.ejs', { students }); // Pass the students to the EJS template
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching students.");
    }
});

router.get('/student/add/new', async(req, res) => {
    // req.flash('error_msg', 'Hello Dear');
    try {
        res.render('./admin/addStudent.ejs'); // Pass the students to the EJS template
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/add/new/student', async(req, res) => {
    // req.flash('error_msg', 'Hello Dear');
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.json("Student addded Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


module.exports = router;



