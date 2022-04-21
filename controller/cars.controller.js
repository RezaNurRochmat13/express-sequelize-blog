const db = require('../models');
const Car = db.car;

exports.getAllCars = (req, res) => {
    Car.findAll().then(result => {
        res.render('index', {
            data: result
        });
    });
}

exports.createNewCar = (req, res) => {

}

exports.updateCar = (req, res) => {

}

exports.deleteCar = (req, res) => {

}