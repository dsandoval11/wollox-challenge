export default ['$localStorage', '$rootScope',
  function ($localStorage, $rootScope) {
    this.getListFavorites = (list) => {
      const listStorage = $localStorage.listTech;
      if (listStorage) {
        list.forEach((tech, index) => {
          listStorage.forEach((techStorage)=> {
            if (techStorage.tech === tech.tech) {
              list[index].favorite = techStorage.favorite;
            }
          });
          return tech;
        });
      } else {
        $localStorage.listTech = list.map(({ tech })=> ({
          tech,
          favorite: false
        }));
      }
      return list;
    };

    this.addFavorite = (techName) => {
      const listStorage = $localStorage.listTech;
      for (let index = 0; index < listStorage.length; index++) {
        if (listStorage[index].tech === techName) {
          listStorage[index].favorite = !listStorage[index].favorite;
          break;
        }
      }
      this.countFavorites();
    };

    this.isLoggedin = () => {
      $rootScope.$emit('loggedin', $localStorage.token);
      return $localStorage.token;
    };

    this.countFavorites = () => {
      const count = $localStorage.listTech.reduce((count, tech) => {
        if (tech.favorite) {
          count++;
        }
        return count;
      }, 0);
      $rootScope.$emit('countFavorites', count);
    };
  }];
