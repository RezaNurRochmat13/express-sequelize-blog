const db = require('../models');
const Car = db.car;
const cloudinaryConf = require('../config/cloudinary.js');

exports.getAllCars = async(req, res) => {
    const cars = await Car.findAll();

    res.json({ data: cars });
}

exports.createNewCar = async(req, res) => {
    const uploadFoto = await cloudinaryConf.uploader.upload(req.files.foto.path);

    const body = {
        nama: req.fields.nama,
        sewa: req.fields.sewa,
        ukuran: req.fields.ukuran,
        foto: uploadFoto.secure_url
    };

    const createCar = await Car.create(body);

    res.status(201).json({ data: createCar });
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