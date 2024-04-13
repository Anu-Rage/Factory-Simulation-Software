const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0/Factorydatabase";
const connectToMongo = ()=>
    mongoose.connect(mongoURI) ;

// exporting mongoose
module.exports = connectToMongo;