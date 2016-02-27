(function(){
   var funcEventData = function($scope,EventsService,serverImagePath,$stateParams){
        console.log('within event detail Controller--'+$stateParams);
        $scope.viewEventData = function(){
            
            EventsService.getIndividualEventDetails($stateParams.id).then(function(eventData){
                console.log('event data is '+eventData.eventImagePath);
                eventData.eventImagePath=serverImagePath+'events/'+eventData.eventImagePath+'.jpeg';
                /*angular.forEach(eventData,function(value,key){
                    console.log('image path b4 is'+value.eventImagePath);
                    value.eventImagePath=serverImagePath+'events/'+value.eventImagePath+'.jpeg';
                    console.log('image path is'+value.eventImagePath);
                });*/
                $scope.event = eventData;
                console.log('event is '+$scope.event.name);
            });
        };
       $scope.viewEventData();
    };
    
    purohitApp.controller('eventDetailsCtrl',funcEventData);
        
    
}());