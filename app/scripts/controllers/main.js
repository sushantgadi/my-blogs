'use strict';

/**
 * @ngdoc function
 * @name sushantkumargadiApp.controller:MavenBuildProfiles
 * @description
 * # MavenBuildProfilesCtrl
 * Controller of the sushantkumargadiApp
 */
angular.module('sushantkumargadiApp')
  .controller('MainCtrl', function ($scope,$window) {
   $scope.srollup=function(){
   $window.scrollTo(0, 0);
   };
  });
