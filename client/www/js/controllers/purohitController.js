(function(){
   var funcPurohits = function($scope,PurohitService){
        
        // Populate all the purohits data from service
        $scope.searchAllPurohits = function() {
            PurohitService.getAllPurohits().then(function(purohitsData){
              $scope.purohits = purohitsData;
            });
        }
        $scope.searchAllPurohits();
    };
    
    purohitApp.controller('searchPurohitsCtrl',funcPurohits);
        
    
}());