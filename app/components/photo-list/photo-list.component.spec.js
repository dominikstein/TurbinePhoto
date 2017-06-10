'use strict';

describe('photoList', function() {
    beforeEach(module('photoList'));

    describe('PhotoListController', function() {
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

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('assets/photos.json').respond(data);

      ctrl = $componentController('photoList');
    }));


    it('should create a `album` property with 2 photos, fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.allAlbums).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.allAlbums.length).toEqual(1);
      expect(ctrl.albums.length).toEqual(1);
    });

    it('should set a default value for the `page` property', function() {
      expect(ctrl.page).toBe(0);
    });


    });

})