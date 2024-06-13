const CarService = require('../service/cars.service');

class CarsController {
	static getAllCars = async (req, res) => {
		const cars = await CarService.findAllCar();
		res.json({ data: cars });
	};

	static getCarById = async (req, res) => {
		const car = await CarService.findCarById(req.params.id);
		res.json({ data: car });
	};

	static createNewCar = async (req, res) => {
		const car = await CarService.saveCar(req);
		res.status(201).json({ data: car });
	};

	static updateCar = async (req, res) => {
		const car = await CarService.updateCar(req.params.id, req);
		res.json({ data: car });
	};

	static deleteCar = async (req, res) => {
		const car = await CarService.deleteCar(req.params.id);
		res.json({ data: car });
	};
}

module.exports = CarsController;
