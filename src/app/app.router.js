
export default ($routeProvider) => {
  $routeProvider
    .when('/', {
      template: '<landing></landing>'
    })
    .when('/terms', {
      template: '<terms></term>'
    })
    .when('/sigup', {
      template: '<signup></signup>',
      resolve: {
        'auth': ['authService', (authService) => {
          return authService.showAuthenticated(false, '/list');
        }]
      }
    })
    .when('/list', {
      template: '<listapp></listapp>',
      resolve: {
        'auth': ['authService', (authService) => {
          return authService.showAuthenticated(true, '/sigup');
        }]
      }
    })
    .otherwise('/');
};
