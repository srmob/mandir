(function(){
    var funcPurohitsData = function($http,serverAPIEndpoint) {
          var self = this;

          self.getAllPurohits = function(sellerID) {
            var parameters= [sellerID];
            return $http.get(serverAPIEndpoint + 'purohit')
              .then(function(result){
                return result;
              },function(error) {
                    console.log(" getAllPurohits ran into error "+error.message);
                });
          };
          
          
          return self;
    };
    purohitApp.factory('PurohitService',funcPurohitsData);
    
}());