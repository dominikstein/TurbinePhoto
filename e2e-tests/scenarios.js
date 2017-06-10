'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('myapp', function() {


  it('should automatically redirect to /photo-list when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/photo-list");
  });


 describe('photo-list', function() {

    beforeEach(function() {
      browser.get('index.html#!/photo-list');
    });


    it('should render photo-list when user navigates to /photo-list', function() {
      expect(element(by.css('.panel-title')).getText()).
        toEqual('Albumy');
    });

  });

 
  describe('photo-album', function() {

    beforeEach(function() {
      browser.get('index.html#!/photo-album/1');
    });


    it('should render photo-album when user navigates to /photo-album', function() {
      expect(element(by.css('.panel-title')).getText()).
        toEqual('Zdjęcia w albumie nr 1');
    });

  });
});
