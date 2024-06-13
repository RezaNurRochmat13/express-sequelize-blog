const models = require('../db/models');
const Car = models.Car;

class CarRepository {
	static all = async () => {
		// @ts-ignore
		return await Car.findAll();
	};

	static findCarById = async (id) => {
		// @ts-ignore
		return await Car.findByPk(id);
	};

	static save = async (car) => {
		// @ts-ignore
		return await Car.create(car);
	};

	static update = async (id, car) => {
		// @ts-ignore
		return await Car.update(car, { where: { id: id } });
	};

	static destroy = async (id) => {
		// @ts-ignore
		return await Car.destroy({ where: { id: id } });
	};
}

module.exports = CarRepository;
