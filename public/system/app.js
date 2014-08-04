use strict';


// Declare app level module which depends on filters, and services
var temp_web = angular.module('temp_web', ['ngRoute']);


$(startApp)

function startApp() {

 
    temp_web.config(function($provide, $routeProvider) {

        //setup routes
        //display event list
        $routeProvider.when('/', {templateUrl: 'partials/musings', controller:'musingsCtrl'});
      
    });
}