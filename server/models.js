var mongoose = require('mongoose');

module.exports = function(wagner) {
    mongoose.connect('mongodb://localhost:27017/mandir');
    console.log('connected to mandir databases...')
  var Category =
    mongoose.model('Category', require('./category'), 'categories');

  wagner.factory('Category', function() {
    return Category;
  });
    
    var Purohit =
        mongoose.model('Purohit', require('./category'), 'purohit');

    wagner.factory('Purohit', function() {
        return Purohit;
    });
    
    var Event =
        mongoose.model('Event', require('./category'), 'event');

    wagner.factory('Event', function() {
        return Event;
    });
  return {
    Category: Category,
    Purohit: Purohit,
    Event : Event
  };
};
