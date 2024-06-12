const ArticleService = require('../service/article.service');

class ArticlesController {
	static async getAllArticles(request, response) {
		const articles = await ArticleService.findAllArticle();
		return response.json({ data: articles });
	}

	static async getArticleById(request, response) {
		const article = await ArticleService.findArticleById(request.params.id);

		if (!article) {
			return response.status(404).json({ error: 'Data not found' });
		}

		return response.json({ data: article });
	}

	static async createArticle(request, response) {
		const article = await ArticleService.saveArticle(request.body);
		return response.status(201).json({ data: article });
	}

	static async updateArticles(request, response) {
		const article = await ArticleService.updateArticle(
			request.params.id,
			request.body
		);
		return response.json({ data: article });
	}

	static async deleteArticles(request, response) {
		const article = await ArticleService.deleteArticle(request.params.id);
		return response.json({ data: article });
	}
}

module.exports = ArticlesController;
