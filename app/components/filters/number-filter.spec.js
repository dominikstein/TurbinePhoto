'use strict';

describe('supernumber', function() {

  beforeEach(module('myApp'));

  it('should convert numeric into integer with superscript',
    inject(function(supernumberFilter) {
      expect(supernumberFilter(14.357,2)).toBe('14<sup>36</sup>');
      expect(supernumberFilter(456.1234,2)).toBe('456<sup>12</sup>');
    })
  );

});
