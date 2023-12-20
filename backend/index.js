const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()

// mongodb connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URl, () => console.log('MongoDB has been started successfully'))
// starting server
app.listen(process.env.PORT, () => console.log('server has been started successfully'))

