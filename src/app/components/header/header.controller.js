import './header.scss';

export default function HomeController($scope) {
  angular.element(window).bind('scroll', () => {
    const getCurrentScroll = () => {
      return window.pageYOffset || document.documentElement.scrollTop;
    };
    const scroll = getCurrentScroll();

    $scope.$apply(()=> {
      $scope.shrinkHeader = scroll > 50;
    });
  });
}
