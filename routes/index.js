var express = require('express');
var router = express.Router();
var connection = require('../database/connection')
/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * from article', function(err, rows, fields) {
        if (err) throw err;
        res.render('index', { articleList: rows});
    });
});

module.exports = router;
