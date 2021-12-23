//Packages and Imports.
var express = require('express');
var mySQLDAO = require('./mySQLDAO');
var mongoDAO = require('./mongoDAO');

//Express.
var app = express()

// Set the view engine to ejs
app.set('view engine', 'ejs')


//HomePage
app.get('/', (req, res) => {
    // Page Links
    res.send("<a href='/listModules'>List Modules </br> <a href='/listStudents'>List Students </br> <a href='/listLecturers'>List Lecturers")
}) //END

// /listModule Page
app.get('/listModules', (req, res) => {
    // Calls getModules
    mySQLDAO.getModules()
        .then((result) => {
            res.render('listModules', { modules: result })
        }) //END
        .catch((error) => {
            res.send(error)
        }) //END
}) //END


//List Students
app.get('/listStudents', (req, res) => {
    mySQLDAO.getStudents()
        .then((result) => {
            res.render('listStudents', {students:result})
        })
        .catch((error) => {
            res.send(error)
        })
})


 // listen
app.listen(3000, () => {
    console.log("Listening on Port 3000")
}) // listen - END