import './techCard.scss';

export default ['$scope', 'storageService', function ($scope, storageService) {
  $scope.tech = {};

  this.$onInit = function () {
    $scope.tech = this.tech;
  };

  $scope.addFavorite = () =>{
    storageService.addFavorite($scope.tech.tech);
    $scope.tech.favorite = !$scope.tech.favorite;
  };
}];
