(function(){
    var funcPurohitsData = function($http,serverAPIEndpoint,DBA) {
          var self = this;

          self.getAllPurohits = function() {
            return $http.get(serverAPIEndpoint + 'purohit')
              .then(function(result){
                //return DBA.processResultSethttp(result);
                //return JSON.parse(result);
                console.log(result.data.purohit);
                return result.data.purohit;
              },function(error) {
                    console.log(" getAllPurohits ran into error "+error.message);
                });
          };
          
          
          return self;
    };
    purohitApp.factory('PurohitService',funcPurohitsData);
    
}());