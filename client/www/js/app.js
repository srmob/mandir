// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var purohitApp = angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])


//.constant('serverAPIEndpoint','https://stark-eyrie-88310.herokuapp.com/api/v1/')
.constant('serverAPIEndpoint','http://localhost:3000/api/v1/')
.constant('serverImagePath','http://localhost:3000/images/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        console.log("set XDomain "+$httpProvider.defaults.useXDomain);
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $httpProvider.defaults.timeout = 3000;
        //$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        console.log("set XDomain-1-"+$httpProvider.defaults.useXDomain);

    }
]);
