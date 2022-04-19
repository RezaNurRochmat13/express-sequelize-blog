const express = require('express');
const app = express();
const PORT = 8082;
const articlesController = require('./controller/articles.controller.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Index API" });
});

// Controller articles
app.get('/articles', articlesController.findAllArticles);
app.get('/articles/:id', articlesController.findArticleById);
app.post('/articles', articlesController.createArticle);
app.put('/articles/:id', articlesController.updateArticles);
app.delete('/articles/:id', articlesController.deleteArticles);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});