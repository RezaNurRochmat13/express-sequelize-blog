const db = require('../models');
const Car = db.car;
const multer = require('multer');
const upload = multer({ dest: '../public/upload' });

exports.getAllCars = (req, res) => {
    Car.findAll().then(result => {
        res.render('index', {
            data: result
        });
    });
}

exports.renderCreateCarForm = (req, res) => {
    res.render('create', {});
}

exports.createNewCar = (req, res) => {
    const body = {
        nama: req.body.nama,
        sewa: req.body.sewa,
        ukuran: req.body.ukuran
    };

    Car.create(body);

    res.redirect('/cars');
}

exports.updateCar = (req, res) => {

}

exports.deleteCar = (req, res) => {

}