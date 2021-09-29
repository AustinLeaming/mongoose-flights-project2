const mongoose = require('mongoose');
//optional shortcut to the mongoose.shema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: Number
})

module.exports = mongoose.model('Ticket', ticketSchema)