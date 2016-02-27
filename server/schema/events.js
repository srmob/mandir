var mongoose = require('mongoose');



var eventBaseSchema = {
    _id: { type: String },
    name : {type : String},
    date : {type : String},
    duration : {type : String},
    purohits : [{type : String}]
};

module.exports = new mongoose.Schema(eventBaseSchema);
module.exports.eventBaseSchema = eventBaseSchema;
