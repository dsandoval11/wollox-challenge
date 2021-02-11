import './signup.scss';

export default ['$scope', 'signupService', 'storageService',
  function ($scope, signupService, storageService) {

    $scope.formData = {
      name: '',
      lastName: '',
      country: {},
      department: {},
      email: '',
      phone: '',
      password: '',
      passwordConfirm: '',
      terms: false
    };

    $scope.countries = signupService.getCountries();
    $scope.formData.country = $scope.countries[0];
    $scope.departments = getDepartments($scope.formData.country.code);
    $scope.formData.department = $scope.departments[0];

    $scope.changeCountry = () => {
      $scope.departments = getDepartments($scope.formData.country.code);
      $scope.formData.department = $scope.departments[0];
    };

    $scope.signup = () => {
      signupService.signup($scope.formData)
        .then((result)=>{
          storageService.login(result.data);
        }, (error) => {
          console.log(error);
          // TODO: Controlar error
        });
    };

    function getDepartments(code) {
      return signupService.getDepartmentsCountry(code);
    }
  }];
