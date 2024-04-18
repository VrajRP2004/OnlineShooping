const mongoose = require('mongoose')

const mongoUrl = 'mongodb+srv://vrajprajapati21:nLQewT3thyA6qZ8y@cluster0.slbrsq9.mongodb.net/'

const connetToMongo = () =>{
    mongoose.connect(mongoUrl);
    console.log('mongo connected successfully');
}

module.exports = connetToMongo;