const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Amrit:Hello12345@cluster0.jxabhpp.mongodb.net/googlebooks" || 'mongodb://127.0.0.1:27017/googlebooks');


module.exports = mongoose.connection;
