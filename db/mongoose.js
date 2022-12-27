// This file will handle connection login to mongo db database

const mongoose = require('mongoose');

const mongopath = 'mongodb+srv://dhayal:Fh0Uo9lb5r39CDWL@cluster0.qa5zu2f.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;

mongoose.connect(mongopath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection to mongodb is established successfully");
}).catch((e) => {
    console.log("Error Occured while connection to mongodb database: ");
    console.log(e);
});

module.exports = {
    mongoose
};
