(function(){
    var funcPurohitsData = function($http,serverAPIEndpoint,DBA) {
          var self = this;

          self.getAllPurohits = function() {
            return $http.get(serverAPIEndpoint + 'purohits')
              .then(function(result){
                //return DBA.processResultSethttp(result);
                //return JSON.parse(result);
                console.log(result.data);
                return result.data;
              },function(error) {
                    console.log(" getAllPurohits ran into error "+error.message);
                });
          };
        
          self.getIndividualPurohit = function(id) {
            return $http.get(serverAPIEndpoint + 'purohits/id/'+id)
              .then(function(result){
                //return DBA.processResultSethttp(result);
                //return JSON.parse(result);
                console.log('Individual purohit->'+angular.fromJson(result));
                return result.data;
              },function(error) {
                    console.log(" getIndividualPurohit  error "+error.message);
                });
          };
          
          return self;
    };
    purohitApp.factory('PurohitService',funcPurohitsData);
    
}());