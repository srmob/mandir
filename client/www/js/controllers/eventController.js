(function(){
   var funcFetchAllEvents = function($scope,EventsService){
        
        // Populate all the events data from service
        $scope.funcFetchAllEvents = function() {
            EventsService.getAllEvents().then(function(eventsData){
              $scope.events = eventsData;
            });
        }
        $scope.funcFetchAllEvents();
    };
    
    purohitApp.controller('upcomingEventsCtrl',funcFetchAllEvents);
        
    
}());