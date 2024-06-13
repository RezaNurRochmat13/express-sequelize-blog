const express = require('express');
const router = express.Router();
const CarController = require('../controller/cars.controller');

router.get('/', CarController.getAllCars);
router.get('/:id', CarController.getCarById);
router.post('/', CarController.createNewCar);
router.put('/:id', CarController.updateCar);
router.delete('/:id', CarController.deleteCar);

module.exports = router;
