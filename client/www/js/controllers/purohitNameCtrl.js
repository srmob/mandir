(function(){
   var funcPurohitData = function($scope,PurohitService,$stateParams){
        console.log('within name Controller--'+$stateParams);
        $scope.viewPurohitData = function(){
            console.log('id is'+$stateParams.id);
            PurohitService.getIndividualPurohit($stateParams.id).then(function(purData){
                
              $scope.purohit = purData;
                console.log(' pur data is ->'+$scope.purohit.name);
               
            });
        };
       $scope.viewPurohitData();
    };
    
    purohitApp.controller('purohitNameCtrl',funcPurohitData);
        
    
}());