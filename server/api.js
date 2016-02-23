var express = require('express');
var status = require('http-status');

module.exports = function(wagner) {
  var api = express.Router();

    
  api.get('/category/id/:id', wagner.invoke(function(Category) {
    return function(req, res) {
      Category.findOne({ _id: req.params.id }, function(error, category) {
        if (error) {
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if (!category) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
        res.json({ category: category });
      });
    };
  }));
    
    api.get('/purohit', wagner.invoke(function(Purohit) {
    return function(req, res) {
      Purohit.find({  }, function(error, purohit) {
        if (error) {
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if (!purohit) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
        res.json({ purohit: purohit });
      });
    };
  }));

    api.get('/events', wagner.invoke(function(Event) {
        return function(req, res) {
          Event.find({}, function(error, data) {
            if (error) {
              return res.
                status(status.INTERNAL_SERVER_ERROR).
                json({ error: error.toString() });
            }
            if (!data) {
              return res.
                status(status.NOT_FOUND).
                json({ error: 'Not found' });
            }
              console.log('event data is '+data);
            res.json({ event: data });
          });
        };
  }));
  api.get('/category/parent/:id', wagner.invoke(function(Category) {
    return function(req, res) {
      Category.
        find({ parent: req.params.id }).
        sort({ _id: 1 }).
        exec(function(error, categories) {
          if (error) {
            return res.
              status(status.INTERNAL_SERVER_ERROR).
              json({ error: error.toString() });
          }
          res.json({ categories: categories });
        });
    };
  }));

  return api;
};
