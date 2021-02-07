
export default ($routeProvider) => {
  $routeProvider
    .when('/', {
      template: '<landing></landing>'
    })
    .when('/sigup', {
      template: '<signup></signup>',
    })
    .when('/list', {
      template: '<listapp></listapp>',
    })
    .otherwise('/');
};
