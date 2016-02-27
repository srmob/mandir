angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController.searchPurohits', {
    url: '/search',
    views: {
      'tab1': {
        templateUrl: 'templates/searchPurohits.html',
        controller: 'searchPurohitsCtrl'
      }
    }
  })

  .state('tabsController.upcomingEvents', {
    url: '/events',
    views: {
      'tab2': {
        templateUrl: 'templates/upcomingEvents.html',
        controller: 'upcomingEventsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.purohitName'
      2) Using $state.go programatically:
        $state.go('tabsController.purohitName');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/purohit
      /page1/tab2/purohit
  */
  .state('tabsController.purohitName', {
    url: '/purohit/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/purohitName.html',
        controller: 'purohitNameCtrl'
      },
      'tab2': {
        templateUrl: 'templates/purohitName.html',
        controller: 'purohitNameCtrl'
      }
    }
  })

  .state('tabsController.eventDetails', {
    url: '/event',
    views: {
      'tab2': {
        templateUrl: 'templates/eventDetails.html',
        controller: 'eventDetailsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/search')

  

});