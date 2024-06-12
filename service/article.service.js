const ArticleRepository = require('../repository/article.repository');

class ArticleService {
	static findAllArticle = async () => {
		return await ArticleRepository.all();
	};

	static findArticleById = async (id) => {
		return await ArticleRepository.findArticleById(id);
	};

	static saveArticle = async (article) => {
		return await ArticleRepository.save(article);
	};

	static updateArticle = async (id, article) => {
		return await ArticleRepository.update(id, article);
	};

	static deleteArticle = async (id) => {
		return await ArticleRepository.destroy(id);
	};
}

module.exports = ArticleService;
