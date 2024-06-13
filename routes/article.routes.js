const express = require('express');
const router = express.Router();
const ArticleController = require('../controller/articles.controller');

router.get('/', ArticleController.getAllArticles);
router.get('/:id', ArticleController.getArticleById);
router.post('/', ArticleController.createArticle);
router.put('/:id', ArticleController.updateArticles);
router.delete('/:id', ArticleController.deleteArticles);

module.exports = router;
