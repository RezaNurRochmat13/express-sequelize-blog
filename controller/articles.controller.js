const db = require('../models');
const Article = db.articles;

exports.findAllArticles = (request, response) => {
    Article.findAll().then(result => {
        response.json({ data: result });
    });
};

exports.findArticleById = (req, res) => {
    Article.findByPk(req.params.id).then(result => {
        if (result == null) {
            res.status(404).json({ error: "Data not found" });
        }

        res.json({ data: result });
    });
};

exports.createArticle = (req, res) => {
    Article.create(req.body).then(result => {
        res.status(201).json({ data: result });
    });
};

exports.updateArticles = (req, res) => {
    Article.findByPk(req.params.id).then(result => {
        if (result) {
            Article.update(req.body, {
                where: { id: req.params.id }
            });

            res.json({ data: req.body });
        } else {
            res.status(404).json({ error: "Data not found" });
        }

    });
};

exports.deleteArticles = (req, res) => {
    Article.findByPk(req.params.id).then(result => {
        if (result != null) {
            result.destroy();

            res.status(204).json({});
        } else {
            res.status(404).json({ error: "Data not found" });
        }
    });

};