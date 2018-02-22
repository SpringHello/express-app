var eventEmitter = require("events").EventEmitter
var express = require('express');
var router = express.Router();
var connection = require('../database/connection')
/* GET home page. */
var query = (function () {
    var status = "ready"
    var proxy = new eventEmitter()
    return function (req, res, next) {
        res.setHeader('Content-type', 'text/html')
        proxy.once("select", function (rows) {
            res.render('index', {articleList: rows});
        })
        if (status === "ready") {
            status = "pending"
            connection.query('SELECT * from article order by createTime limit 6', function (err, rows, fields) {
                status = "ready"
                if (err) next(err);
                if (rows.length === 0) {
                    next()
                } else {
                    proxy.emit("select", rows)
                    //res.render('index', {articleList: rows});
                }

            });
        }
    }
}())

router.get('/', query);

module.exports = router;
