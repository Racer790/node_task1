var express = require("express");
const articleController = require("../controllers/articleController.js");
var router = express.Router();
var bodyParser = require('body-parser'); 
const jsonParser = express.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/',articleController.getArticleAll); 
router.get('/:idArticle',articleController.getArticle);


module. exports = router;