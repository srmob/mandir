(function(){
   var funcFetchAllEvents = function($scope,EventsService,serverImagePath){
        
        // Populate all the events data from service
        $scope.funcFetchAllEvents = function() {
            EventsService.getAllEvents().then(function(eventsData){
            angular.forEach(eventsData,function(value,key){
                 value.eventImagePath=serverImagePath+'events/'+value.eventImagePath+'.jpeg';
                 console.log('after'+value.imageURL);
            });
              $scope.events = eventsData;
            });
        };
       
        $scope.funcFetchAllEvents();
    };
    
    purohitApp.controller('upcomingEventsCtrl',funcFetchAllEvents);
        
    
}());