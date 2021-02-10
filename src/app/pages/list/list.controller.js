import './list.scss';

export default ['$scope', 'listService', 'storageService',
  function ($scope, listService, storageService) {
    $scope.listTech = [];
    $scope.orderType = 'ASC';
    $scope.textFilter = '';
    let originalList = [];

    listService.getTechList()
      .then((result)=>{
        originalList = storageService.getListFavorites(result.data);
        $scope.listTech = originalList;
        $scope.order();
      }, (error) => {
        console.log(error);
      // TODO: Controlar error
      });

    $scope.order = () => {
      const funcOrder = (a, b) => {
        const nameTech1 = a.tech.toLowerCase();
        const nameTech2 = b.tech.toLowerCase();
        if (nameTech1 > nameTech2) {
          return 1;
        } else if (nameTech1 < nameTech2) {
          return -1;
        }
        return 0;
      };

      if ($scope.orderType === 'ASC') {
        $scope.listTech = $scope.listTech.sort((a, b) => funcOrder(a, b));
      } else {
        $scope.listTech = $scope.listTech.sort((a, b) => funcOrder(b, a));
      }
    };

    $scope.filter = () => {
      $scope.listTech = originalList.filter((tech)=> {
        const techName = tech.tech.toLowerCase();
        const type = tech.type.toLowerCase();
        return techName.includes($scope.textFilter) ||
      type.includes($scope.textFilter);
      });
    };
  }];
