// Promise-MySQL
var mysql = require('promise-mysql');

// Pool
var pool

// MySQL Pool
mysql.createPool({
    connectionLimit : 3,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'collegedb'
    })
    .then((result) => {
        pool = result
    })
    .catch((error) => {
        console.log(error)
}); //END

// getModules
var getModules = function() {
    // Return promise
    return new Promise((resolve, reject) => {
        pool.query('select * from module')
        .then((result) => {
            console.log(result);
            resolve(result)
        }) //END
        .catch((error) => {
            reject(error)
        }) //END
    }) //END
} //END

// getStudents
var getStudents = function() {
    // Return the promise
    return new Promise((resolve, reject) => {
        pool.query('select * from student')
        .then((result) => {
            resolve(result)
        }) //END
        .catch((error) => {
            reject(error)
        }) //END
    }) //END
} //END


// Exports
module.exports = { getModules, getStudents }