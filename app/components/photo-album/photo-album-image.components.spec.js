'use strict';

describe('photoAlbumImage', function() {
    beforeEach(module('photoAlbumImage'));

    describe('PhotoAlbumImageController', function() {
       var $httpBackend, ctrl, scope, rootscope;

       var data = [
                {
                    "albumId": 1,
                    "id": 1,
                    "title": "accusamus beatae ad facilis cum similique qui sunt",
                    "url": "http://placehold.it/600/92c952",
                    "thumbnailUrl": "http://placehold.it/150/92c952"
                }
            ];

    beforeEach(inject(function($componentController, _$httpBackend_,  $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('assets/photos.json').respond(data);

      scope = $rootScope.$new();
      rootscope= $rootScope;
    
      ctrl = $componentController('photoAlbumImage', {$scope:scope });
    }));

    it('should create  properties with url and description after broadcast', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.photo.url).toEqual('');
      expect(ctrl.photo.title).toEqual('');
     
      var eventEmitted = false;
        rootscope.$on("photoid", function() {
        eventEmitted = true;
      });
      rootscope.$broadcast('photoid', 1);
      expect(eventEmitted).toBe(true);

    });

    });

})