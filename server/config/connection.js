const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Amrit:Hello12345@cluster0.jxabhpp.mongodb.net/googlebooks");


module.exports = mongoose.connection;
