const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnect");
const dotenv = require("dotenv").config();

const app = express()
const port = process.env.PORT || 5174;

app.use(express.json()) // this middleware is used because the data to be parse in json format
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

connectDb();
app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
});