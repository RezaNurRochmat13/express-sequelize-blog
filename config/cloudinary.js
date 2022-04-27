const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "eterno",
    api_key: "157965674852962",
    api_secret: "WPMAbQ06AvReY1oumvyg0BKK1nk",
});

module.exports = cloudinary;