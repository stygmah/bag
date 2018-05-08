


var bolsaApp = angular.module('bolsaApp',['ngRoute', 'ui.bootstrap']);


bolsaApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .when('/upload', {
        templateUrl: 'templates/upload.html',
        controller: 'UploadCtrl'
      })
      .otherwise({
        redirectTo: '/',
        caseInsensitiveMatch: true
      });
    $locationProvider.html5Mode(true).hashPrefix('');  
}]);

