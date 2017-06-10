'use strict';

angular.module('myApp').
 filter('supernumber', function() {
    return function(input, count) {
      if (input == undefined) return '';
      var number=Math.floor(input);
      var decimal =(input - number).toFixed(count).toString().substring(2);
      var decimalStr=fract(input);
      return number+'<sup>'+decimal+'</sup>';
    };
  });

function fract(n){
   return Number(String(n).split('.')[1] || 0); 
  }
