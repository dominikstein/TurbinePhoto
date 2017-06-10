'use strict';

angular.module('photoAlbum', ['ngRoute', 'core.photo'])

angular.
  module('photoAlbum').
  component('photoAlbum', {
    templateUrl: 'components/photo-album/photo-album.template.html',
    controller: ['$routeParams', 'Photo', '$window','$rootScope', '$scope',
      function PhotoAlbumController($routeParams, Photo, $window, $rootScope, $scope ) {
        var vm = this;
        vm.photos= [];
        console.log("PhotoAlbumController AlbumId="+$routeParams.albumId)
        vm.albumId=$routeParams.albumId;
        Photo.query(function(response){
          vm.photos = response.filter((response)=> response.albumId==vm.albumId );
        });

        vm.openModal = function (id)
        {
          console.log("Photo clicked: "+id);
          $rootScope.$broadcast('photoid', id);
          $('#myModal').modal('show')
        }

        vm.back = function()
        {
          console.log("back button clicked");
          $window.history.back();
        }

      }
    ]
  });
