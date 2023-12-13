var express = require('express');
const adminController = require("../controllers/adminController.js");
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
const jsonParser = express.json();

//Комментарий из ветки моделей
router.get('/',adminController.getArticleAll);
router.get('/:idArticle',adminController.getArticle);
router.post('/addArticle',adminController.addArticle); 
router.post('/editArticle', adminController.editArticle); 
router.post('/deleteArticle',adminController.deleteArticle);

module.exports = router;