'use strict';

/* Controllers */
var incApp = angular.module('incApp', []);

incApp.controller('incNews', function ($scope, $http) {
  $http.get('http://api.royal.kz/soc/news.json').success(function(data) {
    $scope.news = []
    $scope.news = data.models;
  	 console.log(data.models);
  });

});