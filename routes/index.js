var express = require('express');
var router = express.Router();
var connection = require('../database/connection')
/* GET home page. */
router.get('/', function (req, res, next) {
    connection.query('SELECT * from article order by createTime limit 6', function (err, rows, fields) {
        if (err) next(err);
        if (rows.length === 0) {
            next()
        } else {
            res.render('index', {articleList: rows});
        }

    });
});

module.exports = router;
