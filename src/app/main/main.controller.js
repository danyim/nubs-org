'use strict';

angular.module('nubsOrg')
  .controller('MainCtrl', function ($scope, AnchorSmoothScrollSvc) {

    $scope.gotoElement = function (e) {
      AnchorSmoothScrollSvc.scrollTo(e);
    };
  });
