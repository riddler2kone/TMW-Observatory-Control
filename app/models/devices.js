// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Datapoint', new Schema({
    Address: String,
    Type: String,
    Name: String,
    Version: String,
    State: String,
    Kategorie: String,
    Position: Number,
    DachAuf: Boolean,
    DachZu: Boolean,
    EndlageDachZu: Boolean
}));