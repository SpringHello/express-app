/**
 * Created by apple on 17/10/19.
 */
const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : '192.168.3.244',
    user     : 'root',
    password : 'root',
    database : 'express'
});

connection.connect()

module.exports = connection