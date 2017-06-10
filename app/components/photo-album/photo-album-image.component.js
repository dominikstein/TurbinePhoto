'use strict';

angular.module('photoAlbumImage', ['ngRoute', 'core.photo'])

angular.
  module('photoAlbumImage').
  component('photoAlbumImage', {
    templateUrl: 'components/photo-album/photo-album-image.template.html',
    controller: [ 'Photo', '$scope',
      function PhotoAlbumImageController(Photo, $scope) {
        var vm = this;
        vm.photo = {};
        vm.photo.url='';
        vm.photo.title='';

        $scope.$on('photoid', function(event, id) {
            console.log('photoid broadcast received:' +id);   
             
             Photo.query(function(response){
              var responseElement = response.filter((response)=> response.id==id )[0];
              vm.photo.url=responseElement.url;
              vm.photo.title=responseElement.title;

            });
               
          });

      }
    ]
  });
