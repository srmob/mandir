(function(){
   var funcPurohits = function($scope,$state,PurohitService,serverImagePath){
        
    
        // Populate all the purohits data from service
        $scope.searchAllPurohits = function() {
            PurohitService.getAllPurohits().then(function(data){
                console.log('controller data->'+data.allPandits);
                //$scope.purohitImageURL=ApiEndpoint+"/user/fetchShopImage/uid/"+$scope.userId;
                angular.forEach(data.allPandits,function(value,key){
                     value.imageURL=serverImagePath+'purohits/'+value.imageURL+'.jpeg';
                    //console.log('after'+value.imageURL);
                });
              $scope.purohits = data.allPandits;
            });
        }
        $scope.searchAllPurohits();
       
        $scope.viewPurohitData = function(id){
            /*console.log('id is'+id);
            PurohitService.getIndividualPurohit(id).then(function(purData){
                
              $scope.purohit = purData;
                console.log(' pur data is ->'+$scope.purohit.name);
                $state.go('tabsController.purohitName');
            });*/
            console.log('id being passed is'+id)
             $state.go('tabsController.purohitName',{id:id});
        };
       $scope.clearSearch = function(){
           console.log('clear ');
            $scope.searchPurohit='';
        };
    };
    
    purohitApp.controller('searchPurohitsCtrl',funcPurohits);
        
    
}());