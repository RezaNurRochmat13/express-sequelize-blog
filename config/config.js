// @ts-ignore
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	development: {
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: `${process.env.DATABASE_NAME}_development`,
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		dialect: 'postgres',
	},
	test: {
		username: process.env.CI_DB_USERNAME,
		password: process.env.CI_DB_PASSWORD,
		database: process.env.CI_DB_NAME,
		host: '127.0.0.1',
		port: 3306,
		dialect: 'mysql',
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	production: {
		username: process.env.PROD_DB_USERNAME,
		password: process.env.PROD_DB_PASSWORD,
		database: process.env.PROD_DB_NAME,
		host: process.env.PROD_DB_HOSTNAME,
		port: process.env.PROD_DB_PORT,
		dialect: 'mysql',
	},
};
