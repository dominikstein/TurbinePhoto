'use strict';

describe('Photo', function() {
  var $httpBackend;
  var Photo;
  var photoData = [
    {name: 'Photo X'},
    {name: 'Photo Y'},
    {name: 'Photo Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Photo` service before each test
  beforeEach(module('core.photo'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Photo_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('assets/photos.json').respond(photoData);

    Photo = _Photo_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the phones data from `/assets/photos.json`', function() {
    var phones = Photo.query();

    expect(phones).toEqual([]);

    $httpBackend.flush();
    expect(phones).toEqual(photoData);
  });

});
