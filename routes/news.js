const express = require('express');
const newsController = require('../controllers/newsController.js');

const router = express.Router();
var bodyParser = require('body-parser'); 
const jsonParser = express.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Список новостей
router.get('/', newsController.getNewsList);

// Полный просмотр новости
router.get('/:idNews', newsController.getNews);

module.exports = router;
