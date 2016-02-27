var mongoose = require('mongoose');

module.exports = function(wagner) {
    mongoose.connect('mongodb://localhost:27017/mandir');
    console.log('connected to mandir databases...')
/*  var Category =
    mongoose.model('Category', require('./category'), 'categories');*/

  wagner.factory('Category', function() {
    return Category;
  });
    
    var allPurohits =
        mongoose.model('purohits', require('./schema/purohits'), 'purohit');

    wagner.factory('purohits', function() {
        return allPurohits;
    });
    
    var allEvents =
        mongoose.model('events', require('./schema/events'), 'event');

    wagner.factory('events', function() {
        return allEvents;
    });
    
    
    
  return {
   /* Category: Category,*/
    purohits: allPurohits,
    events : allEvents
  };
};
