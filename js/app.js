var app = angular.module('rates', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
       .when('/ship', {
           templateUrl: '/Javascript/personalProject/ship/ship.html',
           controller: 'shipCtrl'

        })
       .when('/track', {
           templateUrl: '/Javascript/personalProject/tracking/tracking.html',
           controller: 'trackingCtrl'

       })
       .when('/contact', {
           templateUrl: '/Javascript/personalProject/contact/contact.html',
           controller: 'contactCtrl'

       })


});

