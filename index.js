const express = require('express');
const formidable = require('express-formidable');
const app = express();
const PORT = 8082;
// @ts-ignore
require('dotenv').config();
const articleRoute = require('./routes/article.routes');
const carRoute = require('./routes/car.routes');

app.use(express.json());
app.use(formidable());
app.use('/api/articles', articleRoute);
app.use('/api/cars', carRoute);

app.get('/', (req, res) => {
	res.json({ message: 'Index API' });
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
