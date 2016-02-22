var mongoose = require('mongoose');

var categorySchema = {
  _id: { type: String },
  parent: {
    type: String,
    ref: 'Category'
  },
  ancestors: [{
    type: String,
    ref: 'Category'
  }]
};

module.exports = new mongoose.Schema(categorySchema);
module.exports.categorySchema = categorySchema;


var purohitBaseSchema = {
    _id: { type: String },
    name : {type : String},
    age : {type : Number},
    experience : {type : String},
    speciality : [{type : String}]
};

module.exports = new mongoose.Schema(purohitBaseSchema);
module.exports.purohitBaseSchema = purohitBaseSchema;


var eventBaseSchema = {
    _id: { type: String },
    name : {type : String},
    date : {type : String},
    duration : {type : String},
    purohits : [{type : String}]
};

module.exports = new mongoose.Schema(eventBaseSchema);
module.exports.eventBaseSchema = eventBaseSchema;
