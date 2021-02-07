import angular from 'angular';
import 'angular-route';
import configRouter from './app.router';
import LandingController from './pages/landing/landing.controller';
import ListController from './pages/list/list.controller';
import SignupController from './pages/signup/signup.controller';

angular.module('challenge', [
  'ngRoute'
])
  .component('landing', {
    template: require('./pages/landing/landing.component.html'),
    controller: ['$scope', LandingController],
  })

  .component('listapp', {
    template: require('./pages/list/list.component.html'),
    controller: ['$scope', ListController],
  })

  .component('signup', {
    template: require('./pages/signup/signup.component.html'),
    controller: ['$scope', SignupController],
  })
  .config(['$routeProvider', configRouter]);
