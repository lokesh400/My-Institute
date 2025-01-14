const express = require("express");
const router = express.Router();
const Student = require('../models/Student');
const Course = require('../models/Course');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/user/login');
  }

// Signup route
router.get('/show/all/courses', async(req, res) => {
    // req.flash('error_msg', 'Hello Dear');
    try {
        const courses = await Course.find();
        res.render('./admin/allCourses.ejs',{courses});
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching students.");
    }
});

router.get('/add/new/course', async(req, res) => {
    try {
        res.render('./admin/addCourse.ejs',);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/add/new/course', async(req, res) => {
    // req.flash('error_msg', 'Hello Dear');
    try {
        console.log(req.body)
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.json("Student addded Successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/show/all/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findById(id);
        res.render('./admin/particularCourse.ejs',{course});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


module.exports = router;



