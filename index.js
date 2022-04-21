const express = require('express');
const app = express();
const PORT = 8082;
const articlesController = require('./controller/articles.controller.js');
const carsController = require('./controller/cars.controller.js');

app.use(express.json());
app.set('view engine', 'ejs');

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
app.get('/cars', carsController.getAllCars);
app.post('/cars', carsController.createNewCar);
app.put('/cars/:id', carsController.updateCar);
app.delete('/cars/:id', carsController.deleteCar);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});