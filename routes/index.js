var express = require('express');
var router = express.Router();
var computerList = require('../public/data/computers.json')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'TheDigitalDen', foo: computerList });
});

module.exports = router;
