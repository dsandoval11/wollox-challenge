import angular from 'angular';
import 'angular-route';
import 'angular-messages';
import 'ngstorage';
import './styles/main.scss';
import './core/app.components';
import './core/app.constans';
import './core/app.services';

import configRouter from './app.router';

angular.module('challenge', [
  'ngRoute',
  'ngStorage',
  'ngMessages',
  'challenge.components',
  'challenge.services',
  'challenge.constants'
])
  .config(['$routeProvider', configRouter])
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('authorized', function (event, allow, redirect) {
      if (!allow) {
        $location.path(redirect);
      }
    });
  }]);
