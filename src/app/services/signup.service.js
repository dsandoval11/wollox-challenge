export default ['env', '$http', function (env, $http) {

  this.countries = [
    {
      code: 1,
      name: 'Colombia',
      departments: [
        'Valle del Cauca',
        'Antioquia',
        'Santander',
        'Quindío',
        'Huila'
      ]
    },
    {
      code: 2,
      name: 'Argentina',
      departments: [
        'Buenos Aires',
        'Córdoba',
        'Chaco y Corrientes',
        'La Pampa',
        'Salta'
      ]
    },
    {
      code: 3,
      name: 'Chile',
      departments: [
        'Antofagasta',
        'Arica y Parinacota',
        'Coquimbo',
        'La Araucanía',
        'Atacama'
      ]
    },
    {
      code: 4,
      name: 'Ecuador',
      departments: [
        'Pichincha',
        'Guayas',
        'Azuay',
        'Manabí',
        'Santa Elena'
      ]
    },
    {
      code: 5,
      name: 'Peru',
      departments: [
        'Lima',
        'Cusco',
        'Arequipa',
        'Piura',
        'Tacna'
      ]
    }
  ];

  this.getCountries = () => {
    return this.countries.map(
      ({ code, name }) => ({ code, name })
    );
  };

  this.getDepartmentsCountry = (countryCode) => {
    const country = this.countries.find(
      (country) => country.code === countryCode);
    return country.departments;
  };

  this.signup = (dataUser) => {
    const { country, department, email, lastName, name, password, phone } = dataUser;
    const body = {
      name: name,
      last_name: lastName,
      country: country.name,
      province: department,
      mail: email,
      phone: phone,
      password: password
    };

    return $http.post(`${env.API_URL}/signup`, body);
  };
}];
