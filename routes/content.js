var express = require('express');
var router = express.Router();
var connection = require('../database/connection')

/* GET content page. */
router.get('/:uuid', function(req, res, next) {
    connection.query(`SELECT * from article where uuid = "${req.params.uuid}"`, function(err, rows, fields) {
        if (err) throw err;
        //res.send(`SELECT * from article where uuid = "${req.params.uuid}"`)
        res.render('content', { article:rows });
    });
});

module.exports = router;

