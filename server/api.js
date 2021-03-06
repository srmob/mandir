var express = require('express');
var status = require('http-status');

module.exports = function(wagner) {
  var api = express.Router();

    
  
    api.get('/purohits', wagner.invoke(function(purohits) {
    return function(req, res) {
      purohits.find({}, function(error, purohits) {
        if (error) {
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if (!purohits) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
        res.json({ allPandits: purohits });
      });
    };
  }));

    
  api.get('/purohits/id/:id', wagner.invoke(function(purohits) {
    return function(req, res) {
        console.log('req id'+req.params.id);
      purohits.findById(req.params.id).
        exec(function(error, purohit) {
          if (error) {
            return res.
              status(status.INTERNAL_SERVER_ERROR).
              json({ error: error.toString() });
          }
          console.log(' individual data is '+purohit);
          res.json(purohit);
        });
    };
  }));
    
    api.get('/events', wagner.invoke(function(events) {
        return function(req, res) {
          events.find({}, function(error, data) {
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
              //console.log('event data is '+data);
            res.json({ event: data });
          });
        };
    }));
    
    api.get('/events/id/:id', wagner.invoke(function(events) {
    return function(req, res) {
        console.log('req event id'+req.params.id);
        events.findById(req.params.id).
            exec(function(error, event) {
              if (error) {
                return res.
                  status(status.INTERNAL_SERVER_ERROR).
                  json({ error: error.toString() });
              }
              console.log(' individual event detail is '+event);
              res.json(event);
            });
        };
    }));
  return api;
};
