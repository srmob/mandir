(function(){
    var funcEventsData = function($http,serverAPIEndpoint) {
          var self = this;

          self.getAllEvents = function() {
            return $http.get(serverAPIEndpoint + 'events')
              .then(function(result){
                console.log(result.data.event);
                return result.data.event;
              },function(error) {
                    console.log(" getAllEvents ran into error "+error.message);
                });
          };
          
          
          return self;
    };
    purohitApp.factory('EventsService',funcEventsData);
    
}());