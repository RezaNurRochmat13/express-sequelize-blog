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

exports.renderUpdateCarForm = (req, res) => {
    Car.findByPk(req.params.id).then(result => {
        res.render('update', {
            id: result.id,
            nama: result.nama,
            sewa: result.sewa
        });
    });

}

exports.updateCar = (req, res) => {
    const updateBody = {
        nama: req.body.nama,
        sewa: req.body.sewa,
        ukuran: req.body.ukuran
    };

    Car.update(updateBody, { where: { id: req.params.id } });

    res.redirect('/cars');
}

exports.deleteCar = (req, res) => {

}