const mongoose = require('mongoose');

const recommenderSchema = mongoose.Schema({
    level_risk: { type: String, required: true, trim: true}, 
    instrument: { type: String, required: true, trim: true}, 
    options: { type: String, required: true, trim: true}
});

module.exports = mongoose.model('Recommender', recommenderSchema);