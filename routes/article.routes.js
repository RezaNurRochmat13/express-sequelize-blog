const express = require('express');
const router = express.Router();
const ArticleController = require('../controller/articles.controller');

router.get('/articles', ArticleController.getAllArticles);
router.get('/article/:id', ArticleController.getArticleById);
router.post('/articles', ArticleController.createArticle);
router.put('/articles/:id', ArticleController.updateArticles);
router.delete('/articles/:id', ArticleController.deleteArticles);

module.exports = router;
