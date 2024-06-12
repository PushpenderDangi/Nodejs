const mongoose = require('mongoose')

const connectDb = async() => {
    try {
        const connect = await(mongoose.connect('localhost:27017/mycontact-backend'))
        console.log("Connected to MongoDb successfully");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDb
