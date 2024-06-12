'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	// @ts-ignore
	class Article extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	// @ts-ignore
	Article.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Article',
		}
	);
	return Article;
};
