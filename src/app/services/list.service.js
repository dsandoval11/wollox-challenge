export default ['$http', 'env', function ($http, env) {

  this.getTechList = () => {
    return $http.get(`${env.API_URL}/techs`);
  };
}];
