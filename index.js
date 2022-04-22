const express = require('express');
const app = express();
const PORT = 8082;
const articlesController = require('./controller/articles.controller.js');
const carsController = require('./controller/cars.controller.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


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
app.get('/cars/add', carsController.renderCreateCarForm);
app.get('/cars/update/:id', carsController.renderUpdateCarForm);

// Endpoint logic
app.post('/cars', carsController.createNewCar);
app.post('/cars/:id', carsController.updateCar);
app.get('/cars/:id', carsController.deleteCar);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});