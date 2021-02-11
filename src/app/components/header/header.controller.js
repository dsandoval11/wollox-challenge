import './header.scss';

export default ['$scope', '$rootScope', 'storageService',
  function ($scope, $rootScope, storageService) {
    angular.element(window).bind('scroll', () => {
      const getCurrentScroll = () => {
        return window.pageYOffset || document.documentElement.scrollTop;
      };
      const scroll = getCurrentScroll();

      $scope.$apply(()=> {
        $scope.shrinkHeader = scroll > 50;
      });
    });

    this.$onInit = function () {
      $rootScope.$on('countFavorites', function (event, count) {
        $scope.countFavorites = count;
      });

      $rootScope.$on('loggedin', function (event, loggedin) {
        $scope.loggedin = loggedin;
      });

      storageService.isLoggedin();
      storageService.countFavorites();
    };
  }];
