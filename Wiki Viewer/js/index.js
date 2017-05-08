//tabel dan js di ambil, di modifikasi, dan dipelajari dari "http://www.learnwebprogramming.info"//
var app = angular.module('wikiApp', []);
app.controller('wikiCtrl', function($scope, $http) {
  $scope.search = function(searchwiki) {
    console.log('searchwiki: ' + searchwiki);
    var app_url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + searchwiki + "&callback=JSON_CALLBACK";
    $http.jsonp(app_url)
    .success(function(data) {
      $scope.searchResults = data.query.pages;
      console.log( $scope.searchResults);
    })
  }
});