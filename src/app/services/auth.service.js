export default ['$localStorage', '$rootScope',
  function ($localStorage, $rootScope) {
    this.showAuthenticated = (show, redirect) => {
      let allow = false;
      const authorized = $localStorage.token;
      if (!authorized && !show) {
        allow = true;
      } else if (authorized && show) {
        allow = true;
      }

      $rootScope.$emit('authorized', allow, redirect);
    };
  }];
