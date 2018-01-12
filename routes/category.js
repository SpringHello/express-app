/**
 * Created by yunrui001 on 2017-11-14.
 */
var express = require('express');
var router = express.Router();
var connection = require('../database/connection')

/* GET content page. */
router.get('/:type', function (req, res, next) {
    connection.query(`SELECT * from article where type = "${req.params.type}"`, function (err, rows, fields) {
        if (err) next(err);
        //res.send(`SELECT * from article where uuid = "${req.params.uuid}"`)
        if (rows.length === 0) {
            next()
        } else {
            res.render('category', {articleList: rows});
        }
    });
});

module.exports = router;

