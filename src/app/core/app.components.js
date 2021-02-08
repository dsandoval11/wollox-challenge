
import angular from 'angular';

import LandingController from '../pages/landing/landing.controller';
import SignupController from '../pages/signup/signup.controller';
import ListappController from '../pages/list/list.controller';

const components = [
  {
    name: 'landing',
    template: require('../pages/landing/landing.component.html'),
    controller: ['$scope', LandingController],
  },
  {
    name: 'signup',
    template: require('../pages/signup/signup.component.html'),
    controller: ['$scope', SignupController]
  },
  {
    name: 'listapp',
    template: require('../pages/list/list.component.html'),
    controller: ['$scope', ListappController]
  },
];

angular.module('challenge.components', []);

components.forEach((component)=> {
  const { name, ...options } = component;
  angular.module('challenge.components')
    .component(name, options);
});
