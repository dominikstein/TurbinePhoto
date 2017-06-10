'use strict';

angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/photo-list', {
          template: '<photo-list></photo-list>'
        }).
        when('/photo-album/:albumId', {
          template: '<photo-album></photo-album>'
        }).
        otherwise('/photo-list');
    }
  ]);
