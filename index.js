const express = require('express');
const formidable = require('express-formidable');
const app = express();
const PORT = 8082;
const articlesController = require('./controller/articles.controller.js');
const carsController = require('./controller/cars.controller.js');
require("dotenv")
    .config();

app.use(express.json());
app.use(formidable());
app.set('view engine', 'ejs');
app.use(express.static('uploads'));


app.get('/', (req, res) => {
    res.json({ message: "Index API" });
});

// Controller articles
app.get('/articles', articlesController.findAllArticles);
app.get('/articles/:id', articlesController.findArticleById);
app.post('/articles', articlesController.createArticle);
app.put('/articles/:id', articlesController.updateArticles);
app.delete('/articles/:id', articlesController.deleteArticles);

// Controller cars
// Render view
app.get('/cars', carsController.getAllCars);
app.post('/cars', carsController.createNewCar);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});