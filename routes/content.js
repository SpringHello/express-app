var express = require('express');
var router = express.Router();
var connection = require('../database/connection')

/* GET content page. */
router.get('/:uuid', function (req, res, next) {
    connection.query(`SELECT * from article where uuid = "${req.params.uuid}"`, function (err, rows, fields) {
        if (err) next(err);
        //res.send(`SELECT * from article where uuid = "${req.params.uuid}"`)
        if (rows.length === 0) {
            next()
        } else {
            res.render('content', {article: rows[0]});
        }

    });
});

module.exports = router;

