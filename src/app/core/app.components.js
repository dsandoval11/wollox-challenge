
import angular from 'angular';

import LandingController from '../pages/landing/landing.controller';
import SignupController from '../pages/signup/signup.controller';
import ListappController from '../pages/list/list.controller';
import HeaderController from '../components/header/header.controller';
import TechCardController from '../components/techCard/techCard.controller';

const components = [
  {
    name: 'landing',
    template: require('../pages/landing/landing.component.html'),
    controller: ['$scope', LandingController],
  },
  {
    name: 'signup',
    template: require('../pages/signup/signup.component.html'),
    controller: SignupController
  },
  {
    name: 'listapp',
    template: require('../pages/list/list.component.html'),
    controller: ListappController
  },
  {
    name: 'headerapp',
    template: require('../components/header/header.component.html'),
    controller: HeaderController,
  },
  {
    name: 'home',
    template: require('../pages/landing/home/home.component.html'),
  },
  {
    name: 'technologies',
    template: require('../pages/landing/technologies/technologies.component.html'),
  },
  {
    name: 'socialnetwork',
    template: require('../pages/landing/socialNetwork/socialNetwork.component.html'),
  },
  {
    name: 'requirements',
    template: require('../pages/landing/requirements/requirements.component.html'),
  },
  {
    name: 'benefits',
    template: require('../pages/landing/benefits/benefits.components.html'),
  },
  {
    name: 'footerapp',
    template: require('../pages/landing/footer/footer.component.html'),
  },
  {
    name: 'techcard',
    template: require('../components/techCard/techCard.component.html'),
    controller: TechCardController,
    bindings: {
      tech: '<'
    }
  },
  {
    name: 'terms',
    template: require('../pages/terms/terms.component.html'),
  },
];

angular.module('challenge.components', []);

components.forEach((component)=> {
  const { name, ...options } = component;
  angular.module('challenge.components')
    .component(name, options);
});
