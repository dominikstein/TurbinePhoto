'use strict';

const pageLength=10;

angular.module('photoList', ['ngRoute', 'core.photo'])

angular.
  module('photoList').
  component('photoList', {
    templateUrl: 'components/photo-list/photo-list.template.html',
    controller: ['Photo', '$location',
      function PhotoListController(Photo, $location) {
        var vm = this;
        vm.page=0;   
        vm.totalPages=0;
        vm.allAlbums = [];
        vm.albums = [];

        vm.num = 14.357; //for number-filter test

        Photo.query(function(response){
          vm.allAlbums = groupByArray(response, "albumId");
          vm.totalPages = Math.floor(vm.allAlbums.length / pageLength);
           reloadView();
        });
        
        vm.clickAlbum = function clickAlbum(AlbumId)
          {
            console.log("Clicked album: "+AlbumId);
            $location.path('photo-album/'+AlbumId);
          }

        vm.clickNext = function clickNext()
        {
          if (vm.page+1>= vm.totalPages) return;
          vm.page++;       
          reloadView();
        }

        function reloadView(){
           console.log('reloading view, current page: '+vm.page);
           var begin = vm.page*pageLength;
           var end = begin+pageLength;
           if (end > vm.allAlbums.length) end= vm.allAlbums.length;
           vm.albums= vm.albums.concat(vm.allAlbums.slice(begin,end));
        }

      }
    ]
  });

var groupByArray = function (xs, key) {
    return xs.reduce(function (rv, x) {
        let v = key instanceof Function ? key(x) : x[key];
        let el = rv.find((r) => r && r.key === v);
        if (el) {
            el.values.push(x);
        }
        else {
            rv.push({
                key: v,
                values: [x]
            });
        }
        return rv;
    }, []);
}