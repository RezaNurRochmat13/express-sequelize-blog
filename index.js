const express = require('express');
const formidable = require('express-formidable');
const app = express();
const PORT = 8082;
// @ts-ignore
require('dotenv').config();
const articleRoute = require('./routes/article.routes');

app.use(express.json());
app.use(formidable());
app.use('/api', articleRoute);

app.get('/', (req, res) => {
	res.json({ message: 'Index API' });
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
