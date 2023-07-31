const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
mongoose.connect("mongodb+srv://Amrit:Hello12345@cluster0.jxabhpp.mongodb.net/googlebooks");

module.exports = mongoose.connection;
