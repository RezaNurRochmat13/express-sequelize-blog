const db = require('../models');
const Car = db.car;
const path = require('path');

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
    console.log(req.fields);
    console.log(req.files.foto.path);


    const body = {
        nama: req.fields.nama,
        sewa: req.fields.sewa,
        ukuran: req.fields.ukuran,
        foto: req.files.foto.path
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
    Car.findByPk(req.params.id).then(result => {
        if (result != null) {
            result.destroy();
            res.redirect('/cars');
        } else {
            res.redirect('/cars');
        }
    })
}