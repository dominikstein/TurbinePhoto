'use strict';

angular.
  module('core.photo').
  factory('Photo', ['$resource',
    function($resource) {
      return $resource('assets/:id.json', {}, {
        query: {
          method: 'GET',
          params: {id: 'photos'},
          isArray: true
        }
      });
    }
  ]);
