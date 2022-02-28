var express = require('express');
var router = express.Router();
var indexController= require("../controllers/index.js")

/* GET home page. */
router.get('/', indexController.index);
router.get('/sidebar', indexController.sidebar)

module.exports = router;
