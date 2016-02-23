(function(){
    
    var dbAccessFunc = function() {
          var self = this;

          // Handle query's and potential errors
         /* self.query = function (query, parameters) {
            parameters = parameters || [];
            console.log(" Parameters passed for Query - "+query+" - is/are -> "+parameters);
              //var db= $cordovaSQLite.openDB({name:"kitakimobile_v1.sqlite", bgType: 1});
            var q = $q.defer();

            $ionicPlatform.ready(function () {
                console.warn(parameters);
                console.warn(query);
                console.warn(db);
                 
              $cordovaSQLite.execute(db, query, parameters)
                .then(function (result) {
                  
                  console.log("In Query Result is "+result); 
                 
                  q.resolve(result);
                }, function (error) {
                  console.warn('I found an error for query');
                  console.warn(error);
                  q.reject(error);
                });
            });
            return q.promise;
          }
          
            self.queryTransaction = function (query1, parameters1) {
                parameters1 = parameters1 || [];
                //parameters2 = parameters2 || [];
                var q = $q.defer();

                $ionicPlatform.ready(function () {
                    db.transaction(function(tx) {
                        tx.executeSql(query1,parameters1,function(tx,res){
                            console.log("-Insert ID-"+ res.insertId +"-impacted-"+ res.rowsAffected );
                            /*tx.executesql(query2,parameters2,function(tx,res){
                                
                            })*/
                      /*  }, function(e) {
                            q.reject(error);
                            console.log("ERROR: " + e.message);
                        });
                    });
                });
                return q.promise;
            }
          
          
          // Proces a result set
          self.processResultSet = function(result) {
            var output = [];
           
            for (var i = 0; i < result.rows.length; i++) {
                output.push(result.rows.item(i));
            }
            return output;
          }*/
          self.processResultSethttp = function(result) {
                var output = [];
                var serverValues = angular.fromJson(result);
                
                for (var i = 0; i < Object.keys(serverValues).length; i++) {
                    console.log('server is '+serverValues.data[i]);
                    output.push(serverValues.data[i]);
                }
                return output;
            }
            
         
          return self;
    };
    purohitApp.factory('DBA',dbAccessFunc);
}());