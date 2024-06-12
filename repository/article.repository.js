const models = require('../db/models');
const Article = models.Article;

class ArticleRepository {
	static all = async () => {
		// @ts-ignore
		return await Article.findAll();
	};

	static findArticleById = async (id) => {
		// @ts-ignore
		return await Article.findByPk(id);
	};

	static save = async (article) => {
		// @ts-ignore
		return await Article.create(article);
	};

	static update = async (id, article) => {
		// @ts-ignore
		return await Article.update(article, { where: { id: id } });
	};

	static destroy = async (id) => {
		// @ts-ignore
		return await Article.destroy({ where: { id: id } });
	};
}

module.exports = ArticleRepository;
