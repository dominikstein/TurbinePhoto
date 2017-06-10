'use strict';

describe('photoAlbum', function() {
    beforeEach(module('photoAlbum'));

    describe('PhotoAlbumController', function() {
       var $httpBackend, ctrl;

       var data = [
                {
                    "albumId": 1,
                    "id": 1,
                    "title": "accusamus beatae ad facilis cum similique qui sunt",
                    "url": "http://placehold.it/600/92c952",
                    "thumbnailUrl": "http://placehold.it/150/92c952"
                },
                {
                    "albumId": 1,
                    "id": 2,
                    "title": "reprehenderit est deserunt velit ipsam",
                    "url": "http://placehold.it/600/771796",
                    "thumbnailUrl": "http://placehold.it/150/771796"
                }
            ];

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('assets/photos.json').respond(data);

      $routeParams.albumId = 1; 
      ctrl = $componentController('photoAlbum');
    }));

    it('should create a photo property with 2 photos, fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.photos).toEqual([]);

      $httpBackend.flush();

      expect(ctrl.photos.length).toEqual(2);
     
    });

    it('should set a default value for the `page` property', function() {
      expect(ctrl.albumId).toBe(1);
    });


    });

})