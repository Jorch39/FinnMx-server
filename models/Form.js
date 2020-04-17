const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    info :  { type: Number, trim: true},
    percentage : { type: Number, trim: true}, 
    term : { type: String, trim: true}, 
    options : { type: String, trim: true}, 
    value : { type: Number, trim: true}, 
    risk : { type: String, trim: true}, 
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
    created_at: { type: Date, default: Date.now()}
});

module.exports = mongoose.model('Form', formSchema);

