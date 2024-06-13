const CarRepository = require('../repository/car.repository');
const cloudinaryConf = require('../config/cloudinary.js');

class CarService {
	static findAllCar = async () => {
		return await CarRepository.all();
	};

	static findCarById = async (id) => {
		return await CarRepository.findCarById(id);
	};

	static saveCar = async (car) => {
		const uploadFoto = await cloudinaryConf.uploader.upload(
			car.files.foto.path
		);

		const body = {
			nama: car.fields.nama,
			sewa: car.fields.sewa,
			ukuran: car.fields.ukuran,
			foto: uploadFoto.secure_url,
		};

		return await CarRepository.save(body);
	};

	static updateCar = async (id, car) => {
		return await CarRepository.update(id, car);
	};

	static deleteCar = async (id) => {
		return await CarRepository.destroy(id);
	};
}

module.exports = CarService;
