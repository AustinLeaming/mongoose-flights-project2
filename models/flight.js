const mongoose = require('mongoose');
//optional shortcut to the mongoose.shema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    destination: String,
    arrival: Date
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema],
    tickets: [ticketSchema]
})

//compiles schema and export it
module.exports = mongoose.model('Flight', flightSchema)
